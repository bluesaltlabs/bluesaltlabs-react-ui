const path = require('path')

module = {
  ...config.module,
  rules: [
    ...config.module.rules,
    {
      test: /\.(scss)$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: function () {
                return [require('precss'), require('autoprefixer')];
              },
            },
          },
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            // using sass (Dart) instead of node-sass because node-sass (Javascript) cannot resolve Yarn 2's Plug'N'Play synthetic node_modules directory
            // Evidently, sass is a bit slower to compile than node-sass, but I think I prefer sass anyway for latest features (such as @use)
            implementation: require('sass'),
          },
        },
      ],
    },
  ],  
  exports: {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/preset-create-react-app",
      "@storybook/preset-scss",
      "@storybook/addon-postcss",
      "storybook-dark-mode"
    ],
    //webpackFinal: async (config, { configType }) => {
    //  config.module.rules.push({
    //    test: /\.scss$/,
    //    use: ['style-loader', 'css-loader', 'sass-loader'],
    //    include: path.resolve(__dirname, '../'),
    //  });
  //
    //  // Return the altered config
    //  return config;
    //}
  }
}

/*
 module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(scss)$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: function () {
                      return [require('precss'), require('autoprefixer')];
                    },
                  },
                },
              },
              {
                loader: require.resolve('sass-loader'),
                options: {
                  // using sass (Dart) instead of node-sass because node-sass (Javascript) cannot resolve Yarn 2's Plug'N'Play synthetic node_modules directory
                  // Evidently, sass is a bit slower to compile than node-sass, but I think I prefer sass anyway for latest features (such as @use)
                  implementation: require('sass'),
                },
              },
            ],
          },
        ],
      },
*/