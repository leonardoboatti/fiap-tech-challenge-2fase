module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['./**/*.ts(x)'],
};