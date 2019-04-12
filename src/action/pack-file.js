export default async function packFile(ctx, next) {
  console.log('packing file');

  await next();
}
