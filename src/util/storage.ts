import cookie from 'js-cookie'

export default {
  save(key: string, value: any) {
    cookie.set(key, value);
  },
  get<T>(key: string): T | null {
    return cookie.getJSON(key);
  },
  remove(key: string) {
    cookie.remove(key);
  }
}
