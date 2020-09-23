import { FETCH_FORMS, NEW_FORM } from './types'

export const fetchForms = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:3001/forms')
    const forms = await res.json()
    dispatch({
      type: FETCH_FORMS,
      payload: forms,
    })
  } catch (error) {
    console.log('throwing Error', error)
    throw error
  }
}

export const createForm = (postData) => async (dispatch) => {
  try {
    const post = await fetch('http://localhost:3001/forms', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    const form = await post.json()
    dispatch({
      type: NEW_FORM,
      payload: form,
    })
  } catch (error) {
    console.log('throwing Error', error)
    throw error
  }
}
