import * as blocks from '../dist/webpack-blocks-more.cjs';

test('import-bundle-esm', () => {
    expect(typeof blocks.watch).toBe('function');
    expect(typeof blocks.parser).toBe('function');

    expect(typeof blocks.babel).toBe('function');
    expect(typeof blocks.image).toBe('function');
    expect(typeof blocks.postcss).toBe('function');
    expect(typeof blocks.stylus).toBe('function');
    expect(typeof blocks.extract).toBe('function');
    expect(typeof blocks.thread).toBe('function');
});
