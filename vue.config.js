// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/KRmixo/",
  chainWebpack: (config) => {
    // Créez un alias pour le dossier d'images
    config.resolve.alias.set(
      "@Picture",
      path.resolve(__dirname, "src/assets/Picture")
    );
  },
});
