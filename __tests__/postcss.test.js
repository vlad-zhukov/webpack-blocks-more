import {createConfig, match} from '@webpack-blocks/webpack';
import {file, css} from '@webpack-blocks/assets';
import postcss from '../src/postcss';
import extract from '../src/extract';

it('should work with match()', () => {
    const config = createConfig([match('*.css', [postcss()])]);

    expect(config).toMatchSnapshot();
});

it('should take options', () => {
    const config = createConfig([
        match('*.css', [
            postcss({
                plugins: [],
            }),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});

it('should work with css block', () => {
    const config = createConfig([match('*.css', [css(), postcss()])]);

    expect(config).toMatchSnapshot();
});

it('should work with file and extract blocks', () => {
    const config = createConfig([
        match('*.css', [
            file({
                name: '[hash:20].css',
            }),
            extract(),
            css({
                styleLoader: false,
            }),
            postcss({
                plugins: [],
            }),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});
