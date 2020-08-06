import * as actionTypes from './actionTypes';

const initialState = {
  movies: {
    data: [],
    totalResults: 0
  },
  page: 1,
  title: '',
  year: '',
  error: '',
  loading: false,
  selectedMovie: null,
  movieError: '',
  searchType: 'all',
  sortType: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.TITLE_CHANGE:
      return {
        ...state,
        title: action.title
      }
    case actionTypes.YEAR_CHANGE:
      return {
        ...state,
        year: action.year
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case actionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          data: action.data.Search,
          totalResults: +action.data.totalResults
        },
        error: ''
      }
    case actionTypes.SEARCH_MOVIES_FAILED:
      return {
        ...state,
        movies: {
          data: [],
          totalResults: 0,
        },
        error: action.error
      }
    case actionTypes.PAGE_NUMBER_CHANGE:
      return {
        ...state,
        page: action.page
      }
    case actionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        selectedMovie: action.data
      }
    case actionTypes.FETCH_MOVIE_FAILED:
      return {
        ...state,
        movieError: action.error
      }
    case actionTypes.TYPE_CHANGED:
      return {
        ...state,
        searchType: action.searchType
      }
    case actionTypes.SORT_RESULTS:
      return {
        ...state,
        sortType: action.sort
      }
    default: return state;
  }
}

export default reducer;