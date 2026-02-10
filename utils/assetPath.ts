const ABSOLUTE_URL_RE = /^(?:[a-z]+:)?\/\//i;

export const toAssetPath = (path: string): string => {
  if (!path || ABSOLUTE_URL_RE.test(path) || path.startsWith('data:') || path.startsWith('#')) {
    return path;
  }

  const base = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
};
