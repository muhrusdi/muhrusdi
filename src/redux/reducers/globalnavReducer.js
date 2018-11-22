import { TOGGLE, PATHNAME, SHOW_ABOUT } from 'Types/globalnavType'

const initialState = {
  toggle: false,
  pathname: '',
  isShowAbout: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        toggle: action.toggle
      }
    case PATHNAME:
      return {
        ...state,
        pathname: action.pathname
      }
    case SHOW_ABOUT:
      return {
        ...state,
        isShowAbout: action.showAbout
      }
    default:
      return state
  }
}