module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir:"src",
      sourceType: 'module',
    },
    plugins: [
      'eslint-plugin-react',
      '@typescript-eslint',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:eslint-plugin-react/recommended',
      'plugin:eslint-plugin-react-hooks/recommended',
    ],
    rules: {
      "react/prop-types": [
      0, 
        { 
          ignore: ["ignore"], 
          customValidators: ["customValidator"], 
          skipUndeclared: true // or false
        }
      ]
    }
  };