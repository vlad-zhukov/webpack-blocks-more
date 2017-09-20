const {
    setEnv, watch, parser, babel, stylus, stylusDev,
} = require('../dist/webpack-blocks-more.cjs');

test('import-bundle-cjs', () => {
    expect(typeof setEnv).toBe('function');
    expect(typeof watch).toBe('function');
    expect(typeof parser).toBe('function');

    expect(typeof babel).toBe('function');
    expect(typeof stylus).toBe('function');
    expect(typeof stylusDev).toBe('function');
});
