import { clientsClaim, cacheNames, setCacheNameDetails } from "workbox-core";
import {
  pageCache,
  imageCache,
  googleFontsCache,
  staticResourceCache,
} from "workbox-recipes";
import { version, build, files, prerendered } from "$service-worker";

const buildFilter = build.filter((val) => {
  const retJs = val.endsWith(".js");
  const retCss = val.endsWith(".css");
  return [retJs, retCss];
});

const imgFilter = files.filter((val) => {
  const svg = val.endsWith(".svg");
  const png = val.endsWith(".png");
  const webp = val.endsWith(".webp");
  return [svg, png, webp];
});

clientsClaim();

pageCache({
  cacheName: cacheNames.prefix + "pages" + cacheNames.suffix,
});

setCacheNameDetails({
  prefix: "limbo-",
  suffix: `-v${version}`,
  googleFontsCache: "ga",
});

imageCache({
  cacheName: cacheNames.prefix + "images" + cacheNames.suffix,
  warmCache: imgFilter,
});

pageCache({
  cacheName: cacheNames.prefix + "pages" + cacheNames.suffix,
});

googleFontsCache({
  cachePrefix: cacheNames.googleAnalytics,
});

staticResourceCache({
  cacheName: cacheNames.prefix + "assets" + cacheNames.suffix,
  warmCache: buildFilter,
});

console.log("BUILD", build);
console.log("FILES", files);
console.log("PRERENDERED", prerendered);
