import Cookies, { CookieAttributes } from 'js-cookie'

export const useCookies = () => {
  const getCookie = (title: string) => {
    return Cookies.get(title)
  }

  const setCookie = (title: string, value: string, options?: CookieAttributes) => {
    Cookies.set(title, value, options)
  }

  const deleteCookie = (title: string) => {
    Cookies.remove(title)
  }

  return {
    getCookie,
    setCookie,
    deleteCookie,
  }
}
