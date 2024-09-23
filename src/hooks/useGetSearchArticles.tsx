"use client";

import { getSearchArticles } from "@/utils/actions/getSearchArticles";
import { useEffect, useState } from "react";

export const useGetSearchArticles = (search: string) => {
  const [headlines, setHeadlines] = useState<unknown[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  console.log("_____________________________>", headlines);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        setLoading(true);
        const data = await getSearchArticles(search);
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
