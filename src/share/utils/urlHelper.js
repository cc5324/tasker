export function getInfoByIssueURL(url) {
  const { pathname } = new URL(url);
  // console.log(pathname);
  const pathParams = pathname.split("/");
  // console.log(pathParams);
  return {
    owner: pathParams[2],
    repo: pathParams[3],
    issue_number: pathParams[5],
  };
}

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
