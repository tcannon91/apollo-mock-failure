module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', './'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ['text', 'cobertura'],
  reporters: ['default', ['jest-junit', { outputName: 'test-results.xml' }]],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
        allowJs: true,
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        noImplicitAny: true,
        target: 'es6',
        isolatedModules: false,
        strict: true,
      },
    },
  },
};
