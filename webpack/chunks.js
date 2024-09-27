export default {
  react: {
    test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
    name: 'react',
    chunks: 'all',
  },
  vendor: {
    name: 'vendors',
    test: /[\\/]node_modules[\\/]/,
  },
};
