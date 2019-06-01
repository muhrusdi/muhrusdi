export const minSM = '@media (min-width: 576px)'
export const minMD = '@media (min-width: 768px)'
export const minLG = '@media (min-width: 992px)'
export const minXL = '@media (min-width: 1200px)'

export const maxSM = '@media (max-width: 576px)'
export const maxMD = '@media (max-width: 768px)'
export const maxLG = '@media (max-width: 992px)'
export const maxXL = '@media (max-width: 1200px)'

export const media = ({type = 'min', width = 992}) => `@media (${type}-width: ${width}px)`