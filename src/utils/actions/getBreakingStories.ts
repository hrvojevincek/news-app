export async function getBreakingStoriesNYT(category: string) {
  if (category === "general") category = "world";

  if (category === "Home") category = "all";

  const url = `https://api.nytimes.com/svc/news/v3/content/all/${category}.json?api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
