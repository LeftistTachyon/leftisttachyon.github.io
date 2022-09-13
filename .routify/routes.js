
/**
 * @roxi/routify 2.18.8
 * File generated Mon Sep 12 2022 23:26:06 GMT-0500 (Central Daylight Time)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-09-13T04:26:06.351Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "flicktest.svelte",
      "filepath": "/flicktest.svelte",
      "name": "flicktest",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/Tachi/Documents/leftisttachyon.github.io/src/pages/flicktest.svelte",
      "importPath": "../src/pages/flicktest.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/flicktest",
      "id": "_flicktest",
      "component": () => import('../src/pages/flicktest.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "flicktest_old.svelte",
      "filepath": "/flicktest_old.svelte",
      "name": "flicktest_old",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/Tachi/Documents/leftisttachyon.github.io/src/pages/flicktest_old.svelte",
      "importPath": "../src/pages/flicktest_old.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/flicktest_old",
      "id": "_flicktest_old",
      "component": () => import('../src/pages/flicktest_old.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/Tachi/Documents/leftisttachyon.github.io/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

