import { resolve } from 'path';

export default async function resolvePath(ctx, next) {
  const cwd = ctx.cwd = process.cwd();
  const packagePath = ctx.packagePath = resolve(cwd, 'package.json');
  const configPath = ctx.configPath = resolve(cwd, 'builder.config.js');

  await next();
}
