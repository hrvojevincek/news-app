"use client";

import { getSearchArticles } from "@/utils/actions/getSearchArticles";
import { useEffect, useState } from "react";

interface Multimedia {
  url: string;
}

interface Article {
  title: string;
  byline: string;
  url: string;
  section: string;
  multimedia: Multimedia[];
}

export const useGetSearchArticles = (search: string | null) => {
  const [headlines, setHeadlines] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const parsedData = (data: any[]): Article[] => {
    return data.map((article) => {
      return {
        title: article.headline.main,
        byline: article.byline.original,
        url: article.web_url,
        section: article.section_name,
        multimedia:
          article.multimedia.length > 0 && article.multimedia[0].url
            ? [
                {
                  url: `https://www.nytimes.com/${article.multimedia[0].url}`,
                },
              ]
            : [],
      };
    });
  };

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        if (search) {
          setLoading(true);
          const data = await getSearchArticles(search);
          setHeadlines(parsedData(data));
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, [search]);

  return { headlines, loading, error };
};
