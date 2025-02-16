import {
  debug,
  type NodeEnv,
  type BuilderTarget,
  modifyBundlerChain,
  BundlerConfig,
} from '@modern-js/builder-shared';
import { castArray } from '@modern-js/utils/lodash';
import { getCompiledPath } from '../shared';
import type { Context, RspackConfig, ModifyRspackConfigUtils } from '../types';

async function modifyRspackConfig(
  context: Context,
  rspackConfig: RspackConfig,
  utils: ModifyRspackConfigUtils,
) {
  debug('modify rspack config');
  let [modifiedConfig] = await context.hooks.modifyRspackConfigHook.call(
    rspackConfig,
    utils,
  );

  if (context.config.tools?.rspack) {
    const { applyOptionsChain } = await import('@modern-js/utils');
    const { merge } = await import('../../compiled/webpack-merge');

    modifiedConfig = applyOptionsChain(
      modifiedConfig,
      context.config.tools.rspack,
      utils,
      merge,
    );
  }

  debug('modify rspack config done');
  return modifiedConfig;
}

type ChainUtils = Omit<
  ModifyRspackConfigUtils,
  'addRules' | 'prependPlugins' | 'appendPlugins' | 'removePlugin'
>;

function getConfigUtils(
  config: RspackConfig,
  chainUtils: ChainUtils,
): ModifyRspackConfigUtils {
  return {
    ...chainUtils,

    addRules(rules) {
      const ruleArr = castArray(rules);
      if (!config.module) {
        config.module = {};
      }
      if (!config.module.rules) {
        config.module.rules = [];
      }
      config.module.rules.unshift(...ruleArr);
    },

    prependPlugins(plugins) {
      const pluginArr = castArray(plugins);
      if (!config.plugins) {
        config.plugins = [];
      }
      config.plugins.unshift(...pluginArr);
    },

    appendPlugins(plugins) {
      const pluginArr = castArray(plugins);
      if (!config.plugins) {
        config.plugins = [];
      }
      config.plugins.push(...pluginArr);
    },

    removePlugin(pluginName) {
      if (config.plugins) {
        config.plugins = config.plugins.filter(p => p.name !== pluginName);
      }
    },
  };
}

function getChainUtils(target: BuilderTarget): ChainUtils {
  const nodeEnv = process.env.NODE_ENV as NodeEnv;

  return {
    env: nodeEnv,
    target,
    isProd: nodeEnv === 'production',
    isServer: target === 'node',
    isWebWorker: target === 'web-worker',
    getCompiledPath,
  };
}

/**
 * BundlerConfig type is similar to WebpackConfig. need convert
 */
const convertToRspackConfig = (config: BundlerConfig): RspackConfig => {
  return {
    ...config,
    cache:
      typeof config.cache === 'object' && config.cache.type === 'filesystem'
        ? {
            ...config.cache,
            /** rspack buildDependencies type is array */
            buildDependencies: Object.values(
              config.cache.buildDependencies || [],
            ).flat(),
          }
        : config.cache,
    /** value is consistent. one type is string, the other one type is enum */
    devtool: config.devtool as RspackConfig['devtool'],
    target: config.target as RspackConfig['target'],
  };
};

export async function generateRspackConfig({
  target,
  context,
}: {
  target: BuilderTarget;
  context: Context;
}) {
  const chainUtils = getChainUtils(target);
  const chain = await modifyBundlerChain(context, chainUtils);

  let rspackConfig = convertToRspackConfig(chain.toConfig());

  rspackConfig = await modifyRspackConfig(
    context,
    rspackConfig,
    getConfigUtils(rspackConfig, chainUtils),
  );

  return rspackConfig;
}
