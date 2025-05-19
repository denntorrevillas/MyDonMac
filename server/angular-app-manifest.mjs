
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MyDonMac/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/MyDonMac/login",
    "route": "/MyDonMac"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/login"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/signup"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/menu"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/product"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/bag"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/profile"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/orders"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/admin"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/adminLogIn"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/adminSignUp"
  },
  {
    "renderMode": 2,
    "route": "/MyDonMac/notification"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2554, hash: 'c04b37025d9fd7619282e2b44d42125148c5a8836cce2d5ca654ca376c8d515a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2900, hash: 'd0dbcf0537ed970e3a62807188dbabc94743a39331f1c4a311eeac046928201a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 5281, hash: 'c8088dbff0f551cb27c925e877567a50b62c4524327f9015ae11168d8c38e594', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6679, hash: 'fc64d0a0540f42ef5520e5e6f2dc630f0949b6e064d5be452c72c99b044ee349', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 2669, hash: '181393f25c1311cd88b309e70384c4c1109e1105de1e568ad1e55f4b31a06dce', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'bag/index.html': {size: 5284, hash: '66855fe3412d6fd09cb3f467e94f345a9a3cbabcf6159ef743fd301a4d41d991', text: () => import('./assets-chunks/bag_index_html.mjs').then(m => m.default)},
    'orders/index.html': {size: 3822, hash: '716abfaaa9164041bc94a4310b2590dcac0bd5d1c4d6e672cbaf47af86c92b7f', text: () => import('./assets-chunks/orders_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 5078, hash: '48fef0e3bd330b82011b602262b4569a1211478e0e86b7a28de45935b86e6ad8', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 4561, hash: '3b8023badc757806e3edc9f6f1040114ec842f077d0f0643c0a327f1fb38e4a7', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 5210, hash: 'c58f5ddbd08efe8b1c87d0385e1fea339c9fb1d21bdfb781e7fea3a839653a0d', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'adminSignUp/index.html': {size: 5854, hash: '2aa41f020f7db4a231e751c632cddce8f735a8bec5dfe2287982db3626201dbd', text: () => import('./assets-chunks/adminSignUp_index_html.mjs').then(m => m.default)},
    'notification/index.html': {size: 3634, hash: '8a9f83f73a8c177b1057fd0c41a3f14b29731e9b0aa9da1aa2bea5bcf9cefefb', text: () => import('./assets-chunks/notification_index_html.mjs').then(m => m.default)},
    'adminLogIn/index.html': {size: 6770, hash: '563f1045b09e22e3f7cd4b50829d751e3d4cb7597f35fd4c2374bb38682fbec2', text: () => import('./assets-chunks/adminLogIn_index_html.mjs').then(m => m.default)},
    'styles-24JM3Z6T.css': {size: 42, hash: 'umJv61F35VQ', text: () => import('./assets-chunks/styles-24JM3Z6T_css.mjs').then(m => m.default)}
  },
};
