export async function getSearchArticles(search: string) {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.response.docs;
}
