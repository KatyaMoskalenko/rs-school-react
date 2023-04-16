import axios, { AxiosResponse } from 'axios';
import { Dispatch } from '@reduxjs/toolkit';

export const SAVE_SEARCH_VALUE = 'SAVE_SEARCH_VALUE';
export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
export const FAIL_GETTING_CHARACTERS = 'FAIL_GETTING_CHARACTERS';

export function saveSearchValue(value: string) {
  return { type: SAVE_SEARCH_VALUE, value };
}

export function requestCharacters() {
  return { type: REQUEST_CHARACTERS };
}

export function receiveCharacters(res: AxiosResponse<T, S>) {
  return { type: RECEIVE_CHARACTERS, res };
}

export function failGettingCharacters(error: Array<T>) {
  return { type: FAIL_GETTING_CHARACTERS, error };
}

export const CHARACTERS_URL = `https://rickandmortyapi.com/api/character?name`;

export function getCharacters() {
  return function (dispatch: Dispatch) {
    dispatch(requestCharacters());
    return axios.get(CHARACTERS_URL).then(
      (res) => dispatch(receiveCharacters(res)),
      (error) => dispatch(failGettingCharacters(error))
    );
  };
}
