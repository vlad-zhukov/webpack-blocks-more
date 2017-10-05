import * as blocks from '../dist/webpack-blocks-more.esm';

test('import-bundle-esm', () => {
    expect(typeof blocks.setEnv).toBe('function');
    expect(typeof blocks.watch).toBe('function');
    expect(typeof blocks.parser).toBe('function');

    expect(typeof blocks.image).toBe('function');
    expect(typeof blocks.stylus).toBe('function');
    expect(typeof blocks.stylusDev).toBe('function');
    expect(typeof blocks.extract).toBe('function');
});
