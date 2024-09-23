import { useState, useEffect, useCallback } from "react";
import { getTopHeadlines } from "@/utils/actions/getTopHeadlines";

export type Headlines = {
  status: string;
  articles: {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: null; name: string };
    title: string;
    url: string;
    urlToImage: string;
  }[];
};

export const useTopHeadlines = (initialPage = 1) => {
  const [headlines, setHeadlines] = useState<Headlines | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const data = await getTopHeadlines(page);
        console.log(data);
        setHeadlines(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };
    fetchHeadlines();
  }, [page]);

  return { headlines, loading, error };
};
