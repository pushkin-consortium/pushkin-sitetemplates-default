import { GOT_SESSION_USER, GET_SESSION_USER } from '../actions/userInfo';

const initialState = {
  userID: null
};

export default function error(state = initialState, action) {
  switch (action.type) {
    case GOT_SESSION_USER:
      return {
        ...state,
        userID: action.id
      };
    default:
      return state;
  }
}
