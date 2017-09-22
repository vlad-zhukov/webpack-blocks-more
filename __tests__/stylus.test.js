import {createConfig, match} from '@webpack-blocks/webpack';
import {file} from '@webpack-blocks/assets';
import stylus from '../src/stylus';

it('should work with match()', () => {
    const config = createConfig([match('*.styl', [stylus()])]);

    expect(config).toMatchSnapshot();
});

it('should take options', () => {
    const config = createConfig([
        match('*.styl', [
            stylus({
                stylusOptions: {
                    compress: false,
                },
            }),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});

it('should work with file block', () => {
    const config = createConfig([match('*.styl', [file(), stylus()])]);

    expect(config).toMatchSnapshot();
});
