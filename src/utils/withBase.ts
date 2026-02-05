export const withBase = (path: string) => {
  if (/^https?:\/\//.test(path) || path.startsWith("mailto:")) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalizedPath}`;
};
