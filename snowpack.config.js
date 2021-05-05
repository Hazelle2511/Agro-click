/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // directory name: 'build directory'
    public: '/',
    src: '/dist',
  },
    plugins: [ '@snowpack/plugin-postcss'],  
    // '@snowpack/plugin-react-refresh'
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  

// {
//   "extends": "@snowpack/app-scripts-react",
//   "scripts": { "build:css": "postcss" },
//   "plugins": []
// }
};
