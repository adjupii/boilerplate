module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/test'
  ],
  coverageDirectory: 'coverage',
  setupFiles: ['./test/jest.setup.js'],
  roots: [
    '<rootDir>/src'
  ],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/$1'
  }
};