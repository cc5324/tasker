export function getSearchParams(url) {
  if (typeof url !== "string" && !(url instanceof URL)) {
    console.error("getSearchParams get wrong type parameter");
  }

  if (typeof url === "string") url = new URL(url);

  const params = new Proxy(url.searchParams, {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  return { params };
}
