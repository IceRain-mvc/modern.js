export const queryRE = /\?.*$/s;
export const hashRE = /#.*$/s;

export const isProduction = () => process.env.NODE_ENV === 'production';

export const cleanUrl = (url: string): string =>
  url.replace(hashRE, '').replace(queryRE, '');

export const inBrowser = () => typeof window !== 'undefined';

export function addLeadingSlash(url: string) {
  return url.charAt(0) === '/' || url.startsWith('https') ? url : `/${url}`;
}

export function removeLeadingSlash(url: string) {
  return url.charAt(0) === '/' ? url.slice(1) : url;
}

export function removeTrailingSlash(url: string) {
  return url.charAt(url.length - 1) === '/' ? url.slice(0, -1) : url;
}

export function normalizeSlash(url: string) {
  return removeTrailingSlash(addLeadingSlash(url));
}

export function withBase(url: string, base: string) {
  const normalizedBase = normalizeSlash(base);
  const normalizedUrl = addLeadingSlash(url);
  return normalizedBase ? `${normalizedBase}${normalizedUrl}` : normalizedUrl;
}

export function replaceLang(
  rawUrl: string,
  targetLang: string,
  defaultLang: string,
  langs: string[],
) {
  const url = addLeadingSlash(rawUrl);
  const originalLang = url.split('/')[1];
  const inDefaultLang = !langs.includes(originalLang);
  if (inDefaultLang) {
    if (targetLang === defaultLang) {
      return url;
    } else {
      return addLeadingSlash(`${targetLang}${url}`);
    }
  } else if (targetLang === defaultLang) {
    return url.replace(`/${originalLang}`, '');
  } else {
    return url.replace(originalLang, targetLang);
  }
}

export const omit = (obj: Record<string, unknown>, keys: string[]) => {
  const ret = { ...obj };
  for (const key of keys) {
    delete ret[key];
  }
  return ret;
};

export const parseUrl = (
  url: string,
): {
  url: string;
  query: string;
  hash: string;
} => {
  const [withoutHash, hash = ''] = url.split('#');
  const [cleanedUrl, query = ''] = withoutHash.split('?');
  return {
    url: cleanedUrl,
    query,
    hash,
  };
};

export function normalizeHref(url?: string) {
  if (!url) {
    return '/';
  }
  let cleanUrl = url;
  if (!cleanUrl.endsWith('.html')) {
    if (cleanUrl.endsWith('/')) {
      cleanUrl += 'index.html';
    } else {
      cleanUrl += '.html';
    }
  }

  return addLeadingSlash(cleanUrl);
}

export function withoutLang(path: string, langs: string[]) {
  const langRegexp = new RegExp(`^\\/(${langs.join('|')})`);
  return addLeadingSlash(path).replace(langRegexp, '');
}

export function withoutBase(path: string, base = '') {
  return addLeadingSlash(path).replace(normalizeSlash(base), '');
}
