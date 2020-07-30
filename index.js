const webpack = require("webpack");
const fs = require("fs-extra");
const path = require("path");
const dayjs = require('dayjs')

const projectMainPkg = fs.readJsonSync(
  path.resolve(process.cwd(), "package.json")
);
module.exports = (api) => {
  api.chainWebpack((webpackChain) => {
    webpackChain
      .plugin("BannerPlugin")
      .use(
        new webpack.BannerPlugin({
          banner: `${projectMainPkg.name} ${projectMainPkg.version} ${dayjs().format()}`,
          ...projectMainPkg.bannerOptions,
        })
      )
      .end();
  });
};
