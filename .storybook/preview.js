import { blueSaltLabsTheme } from './themes'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    current: 'light',
    dark: blueSaltLabsTheme.dark,
    light: blueSaltLabsTheme.light,
  }
}
