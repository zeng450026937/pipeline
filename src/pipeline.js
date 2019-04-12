// import exitHook from 'async-exit-hook';
import compose from './compose';

export default class Pipeline {
  constructor(name = '') {
    this.name = name;
    this.middleware = [];
    this.canceled = false;
  }

  pipe(fn) {
    if (fn instanceof Pipeline) fn = fn.callback();
    
    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');

    this.middleware.push((ctx, next) => fn(ctx, next));

    return this;
  }

  callback() {
    return (ctx, next) => {
      const fn = compose(this.middleware);

      return fn(ctx, next);
    };
  }

  async start(payload = {}) {
    // create context
    const ctx = {
      payload,
    };

    return this.callback()(ctx);
  }
}
