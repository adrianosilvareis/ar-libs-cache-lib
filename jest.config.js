const jestConfig = require('@libs/jest-config-lib');

module.exports = {
  ...jestConfig,
  preset: 'ts-jest',
  rootDir: './',
  setupFiles: [],
  setupFilesAfterEnv: ['./tests/setup-after.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!src/index.js',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
