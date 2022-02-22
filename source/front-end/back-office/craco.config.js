const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hook-forms': path.resolve(__dirname, 'src/hook-forms'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages/*': path.resolve(__dirname, 'src/pages/*'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@store/*': path.resolve(__dirname, 'src/store/*'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@templates': path.resolve(__dirname, 'src/components/templates'),
      '@extensions': path.resolve(__dirname, 'src/utils/extensions'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@configurations': path.resolve(__dirname, 'src/configurations'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@providers': path.resolve(__dirname, 'src/providers'),
    }
  },
};
