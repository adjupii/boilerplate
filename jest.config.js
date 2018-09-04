module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules'
  ],
  coverageDirectory: 'coverage',
  roots: [
    '<rootDir>/src'
  ],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/$1'
  }
};