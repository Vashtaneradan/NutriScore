const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  pwa: {
    name: 'NutriCalculator',
    themeColor: '#4A4A4A',
    msTileColor: '#4A4A4A',
    manifestOptions: {
      background_color: '#4A4A4A'
    }
  }
})
