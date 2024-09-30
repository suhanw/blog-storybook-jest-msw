import type { Config } from "jest";

const config: Config = {
  displayName: "client",
  testEnvironment: "jsdom",
  // With the projects option enabled, Jest will copy the root-level configuration options to each
  // individual child configuration during the test run, resolving its values in the child's context.
  // This means that string tokens like <rootDir> will point to the child's root directory even if
  // they are defined in the root-level configuration.
  transform: {
    "^.+\\.(ts|tsx)?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
