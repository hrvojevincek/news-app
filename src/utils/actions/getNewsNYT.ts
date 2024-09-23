"use server";

export async function getNewsNYT() {
  const res = await fetch(
    `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`
  );
  const data = await res.json();
  return data.results;
}
