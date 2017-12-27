/*
 * Stylus loader.
 */
export default function stylus(options = {}) {
    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: [
                {
                    loader: 'stylus-loader',
                    options: {
                        compress: false,
                        'disable-cache': true,
                        preferPathResolver: 'webpack',
                        ...options,
                    },
                },
            ],
        });
}
