import {createConfig, match} from '@webpack-blocks/webpack';
import {file, css} from '@webpack-blocks/assets';
import stylus from '../src/stylus';
import extract from '../src/extract';

it('should work with match()', () => {
    const config = createConfig([match('*.styl', [stylus()])]);

    expect(config).toMatchSnapshot();
});

it('should take options', () => {
    const config = createConfig([
        match('*.styl', [
            stylus({
                compress: false,
            }),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});

it('should work with css block', () => {
    const config = createConfig([match('*.styl', [css(), stylus()])]);

    expect(config).toMatchSnapshot();
});

it('should work with file and extract blocks', () => {
    const config = createConfig([
        match('*.styl', [
            file({
                name: '[hash:20].css',
            }),
            extract(),
            css({
                styleLoader: false,
            }),
            stylus({
                compress: true,
            })
        ])
    ]);

    expect(config).toMatchSnapshot();
});
