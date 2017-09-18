const {
    setEnv, watch, parser, babelLoader,
} = require('../dist/webpack-blocks-more.cjs');

test('import-bundle-cjs', () => {
    expect(typeof setEnv).toBe('function');
    expect(typeof watch).toBe('function');
    expect(typeof parser).toBe('function');

    expect(typeof babelLoader).toBe('function');
});
