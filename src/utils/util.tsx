import { history } from "umi"
export const baseUrl: string = "http://localhost:3007"
export const loginPath: string = "/login"

interface replace {
  pathname: string
  search: string
  // query: {
  //   redirect: string
  // }
}
export const toLoginPath = (from: string) => {
  console.log(from);
  const newPath: replace = {
    pathname: "/login",
    search: `?redirect=${from}`,
    // query: {
    //   redirect: from
    // }
  }
  history.replace(newPath)
}