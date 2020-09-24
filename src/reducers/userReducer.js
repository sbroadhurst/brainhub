import { FETCH_USERS, NEW_USER } from '../actions/types'

const initialState = {
  users: [],
  user: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload.doc,
      }
    case NEW_USER:
      return {
        users: [action.payload, ...state.users],
        user: action.payload,
      }
    default:
      return state
  }
}
