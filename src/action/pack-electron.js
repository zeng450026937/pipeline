export default async function packElectron(ctx, next) {
  console.log('packing electron');

  await next();
}
