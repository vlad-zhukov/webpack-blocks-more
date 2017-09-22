import {createConfig, match} from '@webpack-blocks/webpack';
import {css} from '@webpack-blocks/assets';
import stylusDev from '../src/stylusDev';

it('should work with match()', () => {
    const config = createConfig([match('*.styl', [stylusDev()])]);

    expect(config).toMatchSnapshot();
});

it('should take options', () => {
    const config = createConfig([
        match('*.styl', [
            stylusDev({
                compress: true,
            }),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});

it('should work with css block', () => {
    const config = createConfig([match('*.styl', [css(), stylusDev()])]);

    expect(config).toMatchSnapshot();
});
