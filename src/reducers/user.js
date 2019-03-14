
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_AUTHENTICATION_TOKEN,
} from '../actions/user-actions-types';

const initialState = {
  token: '',
  userDetails: null,
};

export default function user(state = initialState, {
  payload, type,
}) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userDetails: payload,
      };
    case SET_AUTHENTICATION_TOKEN:
      return {
        ...state,
        token: payload,
      };

    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
