
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5443, hash: '711fa2273835afa45bb2e9bc26c9e1c770198a94154c7c98d1527e4bb8df43e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1068, hash: '441a34503cbe26223303b9efdbc8988ab563b6c0b5d8adb6efc479f23c50ed9c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69409, hash: '40e3e32afc68d8d711172ab2c1d85a0f91caa5ff466dde7ff00c8d16057e2465', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CS4ZUETZ.css': {size: 244291, hash: 'JSIpWW7hasY', text: () => import('./assets-chunks/styles-CS4ZUETZ_css.mjs').then(m => m.default)}
  },
};
