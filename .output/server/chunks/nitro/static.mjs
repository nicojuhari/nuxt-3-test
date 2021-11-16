import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/about-99f69d0b.mjs": {
    "type": "application/javascript",
    "etag": "\"2c8-k97YCSmYUUAvb7hOH2E4mFuu55o\"",
    "mtime": "2021-11-16T16:12:44.034Z",
    "path": "../public/_nuxt/about-99f69d0b.mjs"
  },
  "/_nuxt/entry-c3612b5a.mjs": {
    "type": "application/javascript",
    "etag": "\"19c91-SoCs77U4Tl18EnEfN74wQgd3DGs\"",
    "mtime": "2021-11-16T16:12:44.033Z",
    "path": "../public/_nuxt/entry-c3612b5a.mjs"
  },
  "/_nuxt/index-cbefa618.mjs": {
    "type": "application/javascript",
    "etag": "\"208-mMqho0QIE16AxLMYC0nYJugFy0g\"",
    "mtime": "2021-11-16T16:12:44.032Z",
    "path": "../public/_nuxt/index-cbefa618.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"268-D3/inYak8PRBlGDzLjr+y1xsYE4\"",
    "mtime": "2021-11-16T16:12:44.031Z",
    "path": "../public/_nuxt/manifest.json"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/nick/Dev/www/nuxt32-app/nuxt3-app/dist" + "/" + "1637079161";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
