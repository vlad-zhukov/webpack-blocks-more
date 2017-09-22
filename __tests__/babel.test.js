import {createConfig, match} from '@webpack-blocks/webpack';
import babel from '../src/babel';

it('should work with match()', () => {
    const config = createConfig([match('*.js', [babel()])]);

    expect(config).toMatchSnapshot();
});

it('should take options', () => {
    const config = createConfig([
        match('*.js', [
            babel({
                compact: false,
            }),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});
