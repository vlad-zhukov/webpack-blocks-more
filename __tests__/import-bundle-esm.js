import {setEnv, watch, parser, babel, stylus, stylusDev} from '../dist/webpack-blocks-more.esm';

test('import-bundle-esm', () => {
    expect(typeof setEnv).toBe('function');
    expect(typeof watch).toBe('function');
    expect(typeof parser).toBe('function');

    expect(typeof babel).toBe('function');
    expect(typeof stylus).toBe('function');
    expect(typeof stylusDev).toBe('function');
});
