

const NewsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case 'GET_SEARCHED_NEWS':
      return {
        ...state,
        searchedNews: action.payload,
        loading: false

      }
    default:
      return state
    }
}

export default NewsReducer