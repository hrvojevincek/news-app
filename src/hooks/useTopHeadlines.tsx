import { useEffect, useState, useCallback } from "react";

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

  const fetchHeadlines = useCallback(async (pageNumber: number) => {
    try {
      setLoading(true);
      const data = await getTopHeadlines(pageNumber);
      setHeadlines((prevHeadlines) => {
        if (prevHeadlines) {
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
    const intervalId = setInterval(() => {
      fetchHeadlines(page);
    }, 60000); // 60 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [page, fetchHeadlines]);

  const fetchMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return { headlines, loading, error, fetchMore };
};
