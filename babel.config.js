module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens/index',
          '@components': './src/components',
          '@lib': './src/lib',
          '@constant': './src/constant/index',
          '@context': './src/context/index',
          '@assets': './src/assets',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
