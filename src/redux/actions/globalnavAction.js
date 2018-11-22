import { TOGGLE, SHOW_ABOUT } from 'Types/globalnavType'

export const handleToggle = toggle => dipstach => {
  dipstach({type: TOGGLE, toggle})
}

export const setShowAbout = toggle => dispatch => {
  dispatch({type: SHOW_ABOUT, showAbout: toggle})
}