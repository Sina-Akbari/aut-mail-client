module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@core': './src/core',
          '@features': './src/features',
          '@hooks': './src/hooks',
          '@translations': './src/translations',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
