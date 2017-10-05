import {createConfig, match} from '@webpack-blocks/webpack';
import parser from '../src/parser';
import stylus from '../src/stylus';

it('should add a parser rule', () => {
    const config = createConfig([
        parser({
            amd: false,
            browserify: false,
            requireJs: false,
            system: false,
            requireInclude: false,
            requireEnsure: false,
        }),
    ]);

    expect(config).toMatchSnapshot();
});

it('should work with other rules', () => {
    const config = createConfig([
        parser({
            amd: false,
            browserify: false,
            requireJs: false,
            system: false,
            requireInclude: false,
            requireEnsure: false,
        }),
        match('*.styl', [stylus()]),
    ]);

    expect(config).toMatchSnapshot();
});
