module.exports = {
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/__mocks__/css.mock.js',
  },
  verbose: true,
}
