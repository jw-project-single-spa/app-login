const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "jw-project",
    projectName: "app-login",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@mui/material", "@emotion", "rxjs"],
  });
};
