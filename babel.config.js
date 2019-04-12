module.exports = {
  presets : [ '@babel/env' ],
  plugins : [
    '@babel/plugin-syntax-dynamic-import',
    [ '@babel/plugin-proposal-decorators', {
      legacy : true,
    } ],
    [ '@babel/plugin-proposal-class-properties', {
      loose : false,
    } ],
    [ '@babel/plugin-transform-runtime', {
      
    } ],
  ],
};
