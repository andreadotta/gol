module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: '../',
  setupFilesAfterEnv: ["./config/jest.setup.js"],
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: [ "<rootDir>/test/test-utils.js" ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
};