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

  const fetchHeadlines = useCallback(async (pageNum: number) => {
    try {
      setLoading(true);
      const data = await getTopHeadlines(pageNum);

      setHeadlines((prevHeadlines) => {
        if (prevHeadlines && pageNum > 1) {
          return {
            ...data,
            articles: [...prevHeadlines.articles, ...data.articles],
          };
        }
        return data;
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHeadlines(page);
  }, [page, fetchHeadlines]);

  const fetchMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return { headlines, loading, error, fetchMore };
};
