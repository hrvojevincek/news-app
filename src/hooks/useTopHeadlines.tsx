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

  const fetchHeadlines = useCallback(
    async (pageNumber: number, append = false) => {
      try {
        setLoading(true);
        const data = await getTopHeadlines(pageNumber);
        setHeadlines((prevHeadlines) => {
          if (prevHeadlines && append) {
            const newArticles = data.articles.filter(
              (newArticle: { url: string }) =>
                !prevHeadlines.articles.some(
                  (oldArticle) => oldArticle.url === newArticle.url
                )
            );
            return {
              ...data,
              articles: [...prevHeadlines.articles, ...newArticles]
            };
          }
          return data;
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Fetch latest news every 60 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchHeadlines(1);
    }, 60000);

    return () => clearInterval(intervalId);
  }, [fetchHeadlines]);

  // Fetch more when the user requests more pages
  useEffect(() => {
    fetchHeadlines(page, true);
  }, [page, fetchHeadlines]);

  const fetchMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return { headlines, loading, error, fetchMore };
};
