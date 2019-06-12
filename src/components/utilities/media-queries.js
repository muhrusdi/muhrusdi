export const minSM = '@media (min-width: 577.98px)'
export const minMD = '@media (min-width: 769.98px)'
export const minLG = '@media (min-width: 993.98px)'
export const minXL = '@media (min-width: 1201.98px)'

export const maxSM = '@media (max-width: 575.98px)'
export const maxMD = '@media (max-width: 767.98px)'
export const maxLG = '@media (max-width: 991.98px)'
export const maxXL = '@media (max-width: 1199.98px)'

export const media = ({type = 'min', width = 993.98}) => `@media (${type}-width: ${width}px)`