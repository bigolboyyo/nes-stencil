import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'nesstyles-component',
  globalStyle: 'src/assets/css/global.css',
  devServer: {
    openBrowser: true,
    reloadStrategy: 'pageReload',
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
