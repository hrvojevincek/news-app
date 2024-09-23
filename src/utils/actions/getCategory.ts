"use server";

export async function getCategory(category: string) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
  );
  const data = await res.json();
  return data;
}
