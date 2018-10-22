import { TOGGLE } from 'Types/globalnavType'

export const handleToggle = toggle => dipstach => {
  dipstach({type: TOGGLE, toggle})
}