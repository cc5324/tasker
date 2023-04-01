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
