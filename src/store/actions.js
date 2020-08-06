import * as actionTypes from './actionTypes';
import { BASE_URL } from '../shared/apiUrls';
import axios from 'axios';

export const handleTitleChange = title => {
  return {
    type: actionTypes.TITLE_CHANGE,
    title
  }
}

export const handleYearChange = year => {
  return {
    type: actionTypes.YEAR_CHANGE,
    year
  }
}

export const handleLoading = value => {
  return {
    type: actionTypes.SET_LOADING,
    loading: value
  }
}

export const handleSearchSuccess = data => {
  return {
    type: actionTypes.SEARCH_MOVIES_SUCCESS,
    data
  }
}

export const handleSearchFailed = error => {
  return {
    type: actionTypes.SEARCH_MOVIES_FAILED,
    error
  }
}

export const handleSearch = (title, year, page) => {
  let url = BASE_URL;
  if (title !== '' && year === '') {
    url += '&s=' + title + '&page=' + page;
  } else if (title !== '' && year !== '') {
    url += '&s=' + title + '&y=' + year + '&page=' + page;
  }

  return dispatch => {
    dispatch(handleLoading(true));
    axios.get(url)
    .then(response => {
      if(response.data.Response === 'True') {
          dispatch(handleLoading(false));
          dispatch(handleSearchSuccess(response.data));
        } else if(response.data.Response === 'False') {
          dispatch(handleLoading(false));
          dispatch(handleSearchFailed(response.data.Error));
        }
      })
      .catch(error => {
        dispatch(handleLoading(false));
        dispatch(handleSearchFailed(error));
      })
  }
}

export const handlePageChange = pageNumber => {
  return {
    type: actionTypes.PAGE_NUMBER_CHANGE,
    page: pageNumber
  }
}

export const fetchMovieSuccess = data => {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS,
    data
  }
}

export const fetchMovieFailed = error => {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS,
    error
  }
}

export const fetchMovie = id => {
  return dispatch => {
    dispatch(handleLoading(true))
    axios.get(`${BASE_URL}&i=${id}`)
    .then(response => {
        dispatch(handleLoading(false))
        dispatch(fetchMovieSuccess(response.data))
      })
      .catch(error => {
        dispatch(handleLoading(false))
        dispatch(fetchMovieFailed(error))
      })
  }
}

export const handleTypeChanged = (searchType) => {
  return {
    type: actionTypes.TYPE_CHANGED,
    searchType
  }
}

export const handleSortingResults = sort => {
  return {
    type: actionTypes.SORT_RESULTS,
    sort
  }
}