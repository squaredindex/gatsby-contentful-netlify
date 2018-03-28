// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-posts-post-page-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut-contentful/src/posts/PostPage.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut-contentful/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut-contentful/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut-contentful/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/layout-index.json"),
  "our-first-contentful-post.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/our-first-contentful-post.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/layout-index.json"),
  "404.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/404.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/layout-index.json"),
  "about.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/about.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/layout-index.json"),
  "index.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/index.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/lev/dev/gatsbypractice-lut-contentful/.cache/json/404-html.json")
}