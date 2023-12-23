const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "stream": require.resolve('stream-browserify'),
          "assert": require.resolve('assert/'),
          "http": require.resolve('stream-http'),
          "https": require.resolve('https-browserify'),
          "os": require.resolve('os-browserify/browser'),
          "url": require.resolve('url/'),
          "buffer": require.resolve("buffer")
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'], // This line adds Buffer to the global scope
        }),
      ],
    },
  },
  // Optionally, you can add other configurations for Babel, ESLint, etc.
};
