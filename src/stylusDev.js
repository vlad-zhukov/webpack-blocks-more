/*
 * Stylus dev loader.
 */
export default function stylusDev(options = {}) {
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
