import { blueSaltLabsTheme } from './themes'
import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

export const parameters = {
  options: {
    storySort: {
      order: ['Introduction'],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
    dark: blueSaltLabsTheme.dark,
    light: blueSaltLabsTheme.light,
  },
}
