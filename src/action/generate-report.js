export default async function generateReport(ctx, next) {
  try {
    await next();
  }
  catch (error) {
    ctx.error = error;
  }

  console.log('report:', ctx.report, 'error:', ctx.error);
}
