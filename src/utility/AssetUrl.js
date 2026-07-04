const ASSETS_CDN = "https://cdn.jsdelivr.net/gh/atomicptr/dauntless-builder-unforged@master";

export function assetUrl(path) {
    return ASSETS_CDN + path;
}
