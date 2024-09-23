"use server";

export async function getTopHeadlines(page: number) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&page=${page}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const data = await res.json();
  return data;
}
