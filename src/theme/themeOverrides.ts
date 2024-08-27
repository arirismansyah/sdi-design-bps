import type { GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#003c80',
    primaryColorHover: '#0093dd',
    textColor1: '#101828'
  },

  Button: {
    textColorHover: '#0093dd'
  },
  Input: {
    colorFocus: '#0093dd'
  },
  Tabs: {
    tabBorderRadius: '15px',
    tabBorderColor: '#d5d5d5',
    tabColor: '#d5d5d5'
  },
  Card: {
    borderRadius: '25px',
    borderColor: '#d5d5d5',
    boxShadow: '2'
  }
}
export default themeOverrides
