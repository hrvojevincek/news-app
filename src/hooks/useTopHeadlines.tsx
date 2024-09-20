import { useState, useEffect } from "react";
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

export const useTopHeadlines = () => {
  const [headlines, setHeadlines] = useState<Headlines | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        setLoading(true);
        const data = await getTopHeadlines();
        setHeadlines(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  return { headlines, loading, error };
};
