const path = require('path');

module.exports = ({ config }) => {

  // Twig
  config.module.rules.push({
    test: /\.(html.twig|twig)$/,
    use: [
      {
        loader: 'twig-loader',
        options: {
          twigOptions: {
            namespaces: {
              vartheme_bs5: path.resolve(__dirname, '../', 'src/components'),
              atoms: path.resolve(__dirname, '../', 'src/components/atoms'),
              molecules: path.resolve(__dirname, '../', 'src/components/molecules'),
              organisms: path.resolve(__dirname, '../', 'src/components/organisms'),
              templates: path.resolve(__dirname, '../', 'src/components/templates'),
              pages: path.resolve(__dirname, '../', 'src/components/pages'),
            },
          },
          autoescape: true,
        },
      },
    ],
  });

  // Sass:
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // YAML
  config.module.rules.push({
    test: /\.ya?ml$/,
    loader: 'js-yaml-loader',
  });

  // Row text loader.
  config.module.rules.push({
    test: /\.txt$/i,
    use: [
      {
        loader: 'raw-loader',
        options: {
          esModule: false,
        },
      },
    ],
  });

  return config;
};

