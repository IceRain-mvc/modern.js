import path from 'path';
import type { PartialBuildConfig } from '../types';

const legacyWithSourceCodeToCopyConfig = {
  patterns: [
    {
      from: path.join('src', '**/*.{less,sass,scss}'),
      context: 'src',
    },
  ],
};

export const universalJsPreset: PartialBuildConfig = [
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es5',
    outDir: './dist/js/treeshaking',
    copy: legacyWithSourceCodeToCopyConfig,
    dts: false,
  },
  {
    buildType: 'bundleless',
    format: 'cjs',
    target: 'es6',
    outDir: './dist/js/node',
    dts: false,
  },
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es6',
    outDir: './dist/js/modern',
    dts: false,
  },
  {
    buildType: 'bundleless',
    dts: { only: true },
    outDir: './dist/types',
  },
];

export const universalJsLitePreset: PartialBuildConfig = [
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es5',
    outDir: './dist/js/treeshaking',
    copy: legacyWithSourceCodeToCopyConfig,
    dts: false,
  },
  {
    buildType: 'bundleless',
    format: 'cjs',
    target: 'es6',
    outDir: './dist/js/node',
    dts: false,
  },
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es5',
    outDir: './dist/js/modern',
    dts: false,
  },
  {
    buildType: 'bundleless',
    dts: { only: true },
    outDir: './dist/types',
  },
];
export const browserJsPreset: PartialBuildConfig = [
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es5',
    outDir: './dist/js/treeshaking',
    copy: legacyWithSourceCodeToCopyConfig,
    dts: false,
  },
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es6',
    outDir: './dist/js/node',
    dts: false,
  },
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es6',
    outDir: './dist/js/modern',
    dts: false,
  },
  {
    buildType: 'bundleless',
    dts: { only: true },
    outDir: './dist/types',
  },
];

export const browserJsLitePreset: PartialBuildConfig = [
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es5',
    dts: false,
    outDir: './dist/js/treeshaking',
    copy: legacyWithSourceCodeToCopyConfig,
  },
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es5',
    outDir: './dist/js/node',
    dts: false,
  },
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es5',
    outDir: './dist/js/modern',
    dts: false,
  },
  {
    buildType: 'bundleless',
    dts: { only: true },
    outDir: './dist/types',
  },
];

export const nodeJsPreset: PartialBuildConfig = [
  {
    buildType: 'bundleless',
    format: 'cjs',
    target: 'es6',
    dts: false,
    outDir: './dist/js/node',
    copy: legacyWithSourceCodeToCopyConfig,
  },
  {
    buildType: 'bundleless',
    format: 'esm',
    target: 'es6',
    dts: false,
    outDir: './dist/js/modern',
  },
  {
    buildType: 'bundleless',
    dts: { only: true },
    outDir: './dist/types',
  },
];

export const legacyPresets = {
  UNIVERSAL_JS: universalJsPreset,
  UNIVERSAL_JS_LITE: universalJsLitePreset,
  BROWSER_JS: browserJsPreset,
  BROWSER_JS_LITE: browserJsLitePreset,
  NODE_JS: nodeJsPreset,
};
