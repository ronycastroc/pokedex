module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },  
  moduleNameMapper: {    
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "@/(.*)": "<rootDir>/src/$1",
    "@test/(.*)": "<rootDir>/tests/$1",    
    "@components/(.*)$": "<rootDir>/src/components/$1",
    "@pages/(.*)$": "<rootDir>/src/pages/$1",
    "@services/(.*)$": "<rootDir>/src/services/$1",
    "@protocols/(.*)$": "<rootDir>/src/protocols/$1",
    "@store/(.*)$": "<rootDir>/src/store/$1",
    "@hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
  roots: ["<rootDir>/src"],  
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: ["<rootDir>/src/tests/**/*.[jt]s?(x)", "<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts", "!src/index.tsx"],
  restoreMocks: true,
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
