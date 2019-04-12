const Pipeline = require('./dist/pipeline').default;

const aLine = new Pipeline();
const bLine = new Pipeline();
const cLine = new Pipeline();

async function wait(duration = 0) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

aLine.pipe(async(ctx, next) => {
  await wait(1000);
  
  console.log(ctx);
  console.log('a line start');

  ctx.current = 'a-line';

  await next();
});

bLine.pipe(async(ctx, next) => {
  await wait(1000);

  console.log(ctx);
  console.log('b line start');

  ctx.current = 'b-line';

  await next();
});

cLine.pipe(async(ctx, next) => {
  await wait(1000);

  console.log(ctx);
  console.log('c line start');

  ctx.current = 'c-line';

  await next();
});

aLine.pipe(bLine);
aLine.pipe(cLine);

aLine.start();
