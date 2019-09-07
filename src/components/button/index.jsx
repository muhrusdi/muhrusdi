import styled from '@emotion/styled'

const Button = styled.button(
  {
    position: 'relative',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    outline: 'none',
    textAlign: 'center',
    backgroundImage: 'none',
    border: '1px solid transparent',
    boxShadow: '0 2px 0 rgba(0,0,0,0.015)',
    cursor: 'pointer',
    transition: 'all .3s cubic-bezier(.645, .045, .355, 1)',
    userSelect: 'none',
    touchAction: 'manipulation',
    boxSizing: "border-box",
    height: 32,
    padding: '0 15px',
    fontSize: 14,
    borderRadius: 4,
    color: 'rgba(0,0,0,0.65)',
    backgroundColor: '#fff',
    borderColor: '#d9d9d9',
    ':hover': {
      border: '2px solid'
    }
  },
  ({children, theme, ...props}) => ({...theme.colorAnimation, ...props})
)

Button.Radius = styled(Button)({
  borderRadius: 30,
  height: 42,
  minWidth: 120,
  fontSize: 16,
  marginTop: 40,
  background: 'transparent'
},
({theme}) => ({borderColor: theme.borderColorPrimary}),
)

export default Button