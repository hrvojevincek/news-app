export async function getSearchArticles(search: string) {
  // remove spaces and replace with -
  const formattedSearch = search.replace(/\s+/g, "+");

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${formattedSearch}&api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.response.docs;
}
