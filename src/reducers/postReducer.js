import { FETCH_FORMS, NEW_FORM } from '../actions/types'

const initialState = {
  items: [],
  item: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FORMS:
      return {
        ...state,
        items: action.payload.doc,
      }
    case NEW_FORM:
      return {
        items: [action.payload, ...state.items],
        item: action.payload,
      }
    default:
      return state
  }
}
