const env = process.env.BABEL_ENV || process.env.NODE_ENV;

const presets = ['@babel/preset-stage-0'];

if (env === 'production') {
    presets.unshift(
        [
            '@babel/preset-env',
            {
                targets: {browsers: '> 1%'},
                useBuiltIns: 'entry',
                modules: false,
                loose: false
            }
        ]
    );
}

if (env === 'test') {
    presets.unshift(
        [
            '@babel/preset-env',
            {
                targets: {node: 'current'},
                useBuiltIns: false,
                loose: false
            }
        ]
    );
}

module.exports = {presets};
