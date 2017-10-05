import {createConfig, match} from '@webpack-blocks/webpack';
import {file, css} from '@webpack-blocks/assets';
import extract from '../src/extract';

it('should work with match()', () => {
    const config = createConfig([match('*.css', [extract()])]);

    expect(config).toMatchSnapshot();
});

it('should take options', () => {
    const config = createConfig([
        match('*.css', [
            extract({
                publicPath: '../',
            }),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});

it('should work with other blocks', () => {
    const config = createConfig([
        match('*.css', [
            file({
                name: '[hash:20].css',
            }),
            extract(),
            css({
                styleLoader: false,
            }),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});
