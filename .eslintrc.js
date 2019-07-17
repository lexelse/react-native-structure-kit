module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "jest": true,
  },
  "rules": {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "indent": ["error", 4],
    "react/jsx-indent": ["error", 4],
    "quotes": ["error", "double"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}]
  },
  "globals": {
    "fetch": false
  }
}
