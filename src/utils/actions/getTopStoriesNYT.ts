export async function getTopStoriesNYT(category: string) {
  if (category === "general") category = "world";
  const url = `https://api.nytimes.com/svc/topstories/v2/${category.toLowerCase()}.json?api-key=kTGAK2VAXabhavIe9ckSk07vO6ktosgv`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
