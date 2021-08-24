import { create } from '@storybook/theming'
import baseThemeVars from './base'
import lightThemeVars from './light'
import darkThemeVars from './dark'

const lightTheme = create({
  base: 'light',
  ...baseThemeVars,
  ...lightThemeVars,
})

const darkTheme = create({
  base: 'dark',
  ...baseThemeVars,
  ...darkThemeVars,
})

export const blueSaltLabsTheme = {
  light: lightTheme,
  dark: darkTheme,
  normal: darkTheme,
}

export default blueSaltLabsTheme