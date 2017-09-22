import {createConfig} from '@webpack-blocks/webpack';
import watch from '../src/watch';

it('should add a watch setting to true', () => {
    const config = createConfig([watch()]);

    expect(config).toMatchSnapshot();
});

it('should take watchOptions', () => {
    const config = createConfig([
        watch({
            aggregateTimeout: 300,
        }),
    ]);

    expect(config).toMatchSnapshot();
});
