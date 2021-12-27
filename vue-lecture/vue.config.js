module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.plugins.delete('prefetch-index');
    config.plugins.delete('preload');
  },
}