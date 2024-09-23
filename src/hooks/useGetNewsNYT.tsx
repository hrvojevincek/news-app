import { useState, useEffect } from "react";
import { getNewsNYT } from "@/utils/actions/getNewsNYT";

interface NYTArticle {
  abstract: string;
  byline: string;
  created_date: string;
  des_facet: string[];
  first_published_date: string;
  geo_facet: string[];
  item_type: string;
  kicker: string;
  material_type_facet: string;
  multimedia: Array<{
    [key: string]: string;
  }>;
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  related_urls: string[];
  section: string;
  slug_name: string;
  source: string;
  subheadline: string;
  subsection: string;
  title: string;
  updated_date: string;
  uri: string;
  url: string;
}

export const useGetNewsNYT = () => {
  const [headlines, setHeadlines] = useState<NYTArticle[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        setLoading(true);
        const data = await getNewsNYT();
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
