const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  addLessLoader,
  fixBabelImports,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  process.env.BUNDLE_VISUALIZE && addBundleVisualizer(),
  addWebpackAlias({
    "@zef": path.resolve(__dirname, "src"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "primary-color": "#00c6d7",
        "link-color": "#00c6d7",
        "processing-color": "#00c6d7",
      },
    },
  }),
  adjustWorkbox((wb) =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat("index.html"),
    })
  )
);
