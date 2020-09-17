import { FETCH_FORMS, NEW_FORM } from './types'

export const fetchForms = () => (dispatch) => {
  fetch('http://localhost:3001/forms')
    .then((res) => res.json())
    .then((forms) =>
      dispatch({
        type: FETCH_FORMS,
        payload: forms,
      })
    )
}

export const createForm = (postData) => (dispatch) => {
  fetch('http://localhost:3001/forms', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((form) =>
      dispatch({
        type: NEW_FORM,
        payload: form,
      })
    )
}
