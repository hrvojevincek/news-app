"use server";

export async function getNews() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us?&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data = await res.json();
  return data;
}