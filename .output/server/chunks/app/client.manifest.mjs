const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-c3612b5a.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "pages/about.vue",
      "pages/index.vue"
    ]
  },
  "pages/about.vue": {
    "file": "about-99f69d0b.mjs",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-cbefa618.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };
