const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/assets/styles/_var.less" ;@import "@/assets/styles/_mixins.less";`,
      },
    },
  },
});
