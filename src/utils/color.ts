export const hexToRgba = (value?: string) => {
  if (!value) {
    return;
  }

  const codes = value.toLowerCase().match(/[0-9,a-f]{2}/g);
  if (!codes || codes.length !== 4) {
    return;
  }

  const opacity = parseInt(codes[3], 16) / 255;

  const rgb = codes.slice(0, 3).map((code) => parseInt(code, 16));
  const rgba = [...rgb, opacity];

  return `rgba(${rgba.join(",")})`;
};
