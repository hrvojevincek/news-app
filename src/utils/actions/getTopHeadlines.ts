"use server";

export async function getTopHeadlines() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.NEWS_API_KEY}`
  );
  const data = await res.json();
  return data;
}
