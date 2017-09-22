/*
 * Stylus loader.
 */
export default function stylus(options = {}) {
    const {extractOptions = {}, cssOptions = {}, stylusOptions = {}} = options;

    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: [
                {
                    loader: 'extract-loader',
                    options: extractOptions,
                },
                {
                    loader: 'css-loader',
                    options: cssOptions,
                },
                {
                    loader: 'stylus-loader',
                    options: {
                        compress: true,
                        'disable-cache': true,
                        preferPathResolver: 'webpack',
                        ...stylusOptions,
                    },
                },
            ],
        });
}
