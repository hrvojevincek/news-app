export async function getSearchArticles(search: string) {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=kTGAK2VAXabhavIe9ckSk07vO6ktosgv`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
