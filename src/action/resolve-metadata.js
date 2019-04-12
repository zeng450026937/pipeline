import { readJSON } from 'fs-extra';
import MetaData from './metadata';

export default async function resolveMetaData(ctx, next) {
  const { packagePath } = ctx;
  const { configPath } = ctx;

  let pkg;

  let config;

  try {
    // ctx.pkg = pkg = await readJSON(packagePath);
    ctx.pkg = pkg = await readJSON(packagePath);
  }
  catch (error) {
    console.log('load package.json failed', error);
  }

  try {
    /* eslint-disable */
    ctx.config = config = require(`${configPath}`);
    /* eslint-enable */
  }
  catch (error) {
    console.log('load config failed', error);
  }

  ctx.metadata = new MetaData(pkg, config);

  // TODO: check whether metadata is enough for buiding

  await next();
}
