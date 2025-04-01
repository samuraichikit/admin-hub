module.exports = {
  extends: '@it-incubator/eslint-config',
  overrides: [
    {
      "files": ["src/services/**/*.{ts,tsx,js,jsx}"],
      "rules": {
        "max-lines": "off"
      }
    }
  ]
}