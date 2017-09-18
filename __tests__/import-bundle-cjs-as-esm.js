import {setEnv, watch, parser, babelLoader, stylus} from '../dist/webpack-blocks-more.cjs';

test('import-bundle-esm', () => {
    expect(typeof setEnv).toBe('function');
    expect(typeof watch).toBe('function');
    expect(typeof parser).toBe('function');

    expect(typeof babelLoader).toBe('function');
    expect(typeof stylus).toBe('function');
});
