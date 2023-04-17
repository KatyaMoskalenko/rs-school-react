import axios, { AxiosResponse } from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { Book } from 'pages/home/Home';

export interface Action {
  type: string;
  value?: string;
  res?: AxiosResponse<Book[]>;
  error?: string;
}

export const SAVE_SEARCH_VALUE = 'SAVE_SEARCH_VALUE';
export const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';
export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
export const FAIL_GETTING_CHARACTERS = 'FAIL_GETTING_CHARACTERS';

export function saveSearchValue(value: string) {
  return { type: SAVE_SEARCH_VALUE, value };
}

export function getSearchValue(value: string) {
  return { type: GET_SEARCH_VALUE, value };
}

export function requestCharacters(value: string) {
  return { type: REQUEST_CHARACTERS, value };
}

export function receiveCharacters(res: AxiosResponse<Book[]>) {
  return { type: RECEIVE_CHARACTERS, res };
}

export function failGettingCharacters(error: string) {
  return { type: FAIL_GETTING_CHARACTERS, error };
}

export function getCharacters(value: string) {
  return function (dispatch: Dispatch) {
    dispatch(requestCharacters(value));
    return axios.get(`https://rickandmortyapi.com/api/character?name=${value}`).then(
      (res) => dispatch(receiveCharacters(res)),
      (error) => dispatch(failGettingCharacters(error))
    );
  };
}
