export default function staging(name = '') {
  return async function(ctx, next) {
    ctx.stage = name;
    
    console.log('staging: ', ctx.stage);
  
    await next();
  };
}
