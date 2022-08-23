//GET : 게시판 리스트
export const API_GET_BOARDLIST = '/board'

//GET : 게시판 리스트 필터링
export const API_GET_FILTERED_BOARDLIST = (buildingCount:string) => {
  return `/board?buildingcount${buildingCount}`
}

//GET : 게시판 리스트 검색
export const API_GET_SEARCHED_BOARDLIST = (searchKeyword:string) => {
  return `/board?nickname=${searchKeyword}`
}

//GET : 게시판 리스트 검색어추천
export const API_GET_SEARCH_KEYWORD = '/keyword'