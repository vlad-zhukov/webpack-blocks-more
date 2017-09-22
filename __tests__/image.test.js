import {createConfig, match} from '@webpack-blocks/webpack';
import {file} from '@webpack-blocks/assets';
import image from '../src/image';

it('should work with match()', () => {
    const config = createConfig([match(['*.jpg', '*.png'], [image()])]);

    expect(config).toMatchSnapshot();
});

it('should work with file block', () => {
    const config = createConfig([match(['*.jpg', '*.png'], [file(), image()])]);

    expect(config).toMatchSnapshot();
});
