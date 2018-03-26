// @flow

import { SET_SEARCH_TERM, CLEAR_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function clearSearchTerm(searchTerm: string) {
  return { type: CLEAR_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData: Show) {
  return { type: ADD_API_DATA, payload: apiData };
}
