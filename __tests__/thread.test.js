import {createConfig, match} from '@webpack-blocks/webpack';
import {file, css} from '@webpack-blocks/assets';
import thread from '../src/thread';

it('should work with match()', () => {
    const config = createConfig([match('*.js', [thread()])]);

    expect(config).toMatchSnapshot();
});

it('should take options', () => {
    const config = createConfig([
        match('*.js', [
            thread({
                name: 'my-pool',
            }),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});

it('should work with other blocks', () => {
    const config = createConfig([
        match('*.js', [
            file({
                name: '[hash:20].css',
            }),
            thread(),
            css(),
        ]),
    ]);

    expect(config).toMatchSnapshot();
});
