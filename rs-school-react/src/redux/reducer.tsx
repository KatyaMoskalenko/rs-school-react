import {
  Action,
  FAIL_GETTING_CHARACTERS,
  GET_SEARCH_VALUE,
  RECEIVE_CHARACTERS,
  REQUEST_CHARACTERS,
  SAVE_SEARCH_VALUE,
} from './actions';
import { Book } from 'pages/home/Home';

export interface Store {
  searchValue: string | undefined;
  characters: Book[] | null;
}

const initialState: Store = {
  searchValue: '',
  characters: [],
};

export function characters(state = initialState, action: Action) {
  switch (action.type) {
    case SAVE_SEARCH_VALUE: {
      return { ...state, searchValue: action.value };
    }

    case GET_SEARCH_VALUE: {
      const searchValue = state.searchValue;
      return searchValue;
    }

    case REQUEST_CHARACTERS: {
      return { ...state, loading: true };
    }

    case FAIL_GETTING_CHARACTERS: {
      return { ...state, error: action.error };
    }

    case RECEIVE_CHARACTERS: {
      return { ...state, characters: action.res };
    }
    default: {
      return state || initialState;
    }
  }
}
