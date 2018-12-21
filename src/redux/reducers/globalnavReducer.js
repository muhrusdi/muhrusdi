import { TOGGLE, PATHNAME, SHOW_ABOUT } from 'Types/globalnavType'

const initialState = {
  toggle: false,
  pathname: '',
  isShowAbout: false,
  menus: [
    {
      title: 'Works',
      lin: '#',
      subMenus: [
        {
          title: 'DTC',
          link: '#'
        },
        {
          title: 'MPM',
          link: '#'
        },
        {
          title: 'EPROC',
          link: '#'
        },
        {
          title: 'PTSP',
          link: '#'
        },
        {
          title: 'Web Desa',
          link: '#'
        },
        {
          title: 'KAMUPI',
          link: '#'
        },
      ]
    },
    {
      title: 'Blogs',
      link: 'blog',
      subMenus: [
        {
          title: 'Hello World!',
          link: '#'
        }
      ]
    },
    {
      title: 'Gallery',
      link: '#'
    }
  ]
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