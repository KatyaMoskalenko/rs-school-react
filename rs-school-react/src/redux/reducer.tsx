import { AxiosResponse } from 'axios';
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
  characters: AxiosResponse<Book[]> | null;
}

const initialState: Store = {
  searchValue: '',
  characters: null,
};

export function characters(state = initialState, action: Action): Store {
  switch (action.type) {
    case SAVE_SEARCH_VALUE: {
      return { ...state, searchValue: action.value || '' };
    }

    case REQUEST_CHARACTERS: {
      return { ...state };
    }

    case FAIL_GETTING_CHARACTERS: {
      return { ...state };
    }

    case RECEIVE_CHARACTERS: {
      return { ...state, characters: action.res! };
    }
    default: {
      return state || initialState;
    }
  }
}
