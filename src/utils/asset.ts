const BASE_PATH = process.env.ASSETS_PREFIX || "";

export const assetPath = (path: string) => {
  return `${BASE_PATH}/${path}`;
};
