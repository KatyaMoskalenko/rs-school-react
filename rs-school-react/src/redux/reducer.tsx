import {
  Action,
  FAIL_GETTING_CHARACTERS,
  RECEIVE_CHARACTERS,
  REQUEST_CHARACTERS,
  SAVE_SEARCH_VALUE,
} from './actions';
import { Book } from 'pages/home/Home';

export interface Store {
  searchValue: string;
  characters: Book[] | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: Store = {
  searchValue: '',
  characters: null,
  isLoading: false,
  isError: false,
};

export function characters(state = initialState, action: Action): Store {
  switch (action.type) {
    case SAVE_SEARCH_VALUE: {
      return { ...state, searchValue: action.value || '' };
    }

    case REQUEST_CHARACTERS: {
      return { ...state, isLoading: true };
    }

    case FAIL_GETTING_CHARACTERS: {
      return { ...state, isError: true, isLoading: false };
    }

    case RECEIVE_CHARACTERS: {
      return { ...state, characters: action.res || null, isLoading: false, isError: false };
    }
    default: {
      return state || initialState;
    }
  }
}
