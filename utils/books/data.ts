export async function getFictionBooksData() {
  const res = await fetch(
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=wy8tjo4kmsfejwqtjwnufvalb0wzdwji"
  );
  // the return value is *not* serialized

  if (!res.ok) {
    // this will activate the closest `error.js` error boundary
    throw new Error(`failed to fetch data. details: ${res.json}`);
  }

  return res.json();
}

export async function getNonFictionBooksData() {
  const res = await fetch(
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-non-fiction.json?api-key=wy8tjo4kmsfejwqtjwnufvalb0wzdwji"
  );
  // the return value is *not* serialized

  if (!res.ok) {
    // this will activate the closest `error.js` error boundary
    throw new Error("failed to fetch data");
  }

  return res.json();
}
