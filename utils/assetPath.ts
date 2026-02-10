const ABSOLUTE_URL_RE = /^(?:[a-z]+:)?\/\//i;

/**
 * Normalizza i path delle risorse statiche in modo consistente
 * sia in sviluppo che in produzione (Vercel).
 *
 * - Lascia invariati:
 *   - URL assoluti (http://, https://, //)
 *   - data URL
 *   - anchor (#id)
 * - Per il resto:
 *   - garantisce che il path inizi sempre con "/"
 *   - non usa import.meta.env.BASE_URL (che può variare in base all'ambiente)
 */
export const toAssetPath = (path: string): string => {
  if (!path || ABSOLUTE_URL_RE.test(path) || path.startsWith('data:') || path.startsWith('#')) {
    return path;
  }

  return path.startsWith('/') ? path : `/${path}`;
};
