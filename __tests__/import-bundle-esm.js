import {setEnv, watch, babelLoader} from '../dist/webpack-blocks-more.esm';

test('import-bundle-esm', () => {
    expect(typeof setEnv).toBe('function');
    expect(typeof watch).toBe('function');
    expect(typeof babelLoader).toBe('function');
});