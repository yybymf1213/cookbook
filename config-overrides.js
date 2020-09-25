const {override,addWebpackAlias} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ["components"]: path.resolve(__dirname, "./src/components"),
    ["api"] : path.resolve(__dirname,"./src/api"),
    ["assets"] : path.resolve(__dirname,"./src/assets"),
    ["context"] : path.resolve(__dirname,"./src/context"),
  })
)