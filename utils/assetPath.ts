import manifest from './blob-manifest.json';

const ABSOLUTE_URL_RE = /^(?:[a-z]+:)?\/\//i;

/**
 * Normalizza i path delle risorse statiche usano Vercel Blob se disponibile.
 */
export const toAssetPath = (path: string): string => {
  if (!path || ABSOLUTE_URL_RE.test(path) || path.startsWith('data:') || path.startsWith('#')) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Check if the path exists in the blob manifest
  // The manifest keys are like "/media/work/..."
  if (normalizedPath in manifest) {
    return (manifest as Record<string, string>)[normalizedPath];
  }

  return normalizedPath;
};
