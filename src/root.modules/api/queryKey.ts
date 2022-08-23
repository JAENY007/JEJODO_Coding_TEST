export const API_GET_BOARDLIST = '/board'

export const API_GET_FILTERED_BOARDLIST = (buildingCount:string) => {
  return `/board?buildingcount${buildingCount}`
}

export const API_GET_SEARCHED_BOARDLIST = (searchKeyword:string) => {
  return `/board?nickname=${searchKeyword}`
}

export const API_GET_SEARCH_KEYWORD = '/keyword'