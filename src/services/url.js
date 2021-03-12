/* eslint-disable */
export default class Url {
  
  static toQueryString (params) {
    const keys = Object.keys(params)
    if (!keys.length) {
      return ''
    }

    return '?' + Object.keys(params)
      .filter((key) => {
        const value = params[key]
        if (Array.isArray(value)) {
          return value.length
        }

        return value
      })
      .map(key => `${key}=${params[key]}`)
      .join('&')
  }

}
