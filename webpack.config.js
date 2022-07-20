module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
};