const blocks = require('../dist/webpack-blocks-more.cjs');

test('import-bundle-cjs', () => {
    expect(typeof blocks.setEnv).toBe('function');
    expect(typeof blocks.watch).toBe('function');
    expect(typeof blocks.parser).toBe('function');

    expect(typeof blocks.image).toBe('function');
    expect(typeof blocks.stylus).toBe('function');
    expect(typeof blocks.stylusDev).toBe('function');
});
