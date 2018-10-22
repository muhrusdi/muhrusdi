import { TOGGLE } from 'Types/globalnavType'

const initialState = {
  toggle: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        toggle: action.toggle
      }
    default:
      return state
  }
}