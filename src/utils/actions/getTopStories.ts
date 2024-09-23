export async function getTopStoriesNYT() {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=kTGAK2VAXabhavIe9ckSk07vO6ktosgv`
  );
  const data = await res.json();
  return data.results;
}
