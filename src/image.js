/*
 * Image loader.
 */
export default function image(options = {}) {
    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: [
                {
                    loader: 'image-webpack-loader',
                    options: {
                        svgo: {
                            plugins: [
                                {
                                    removeEmptyAttrs: true,
                                },
                                {
                                    cleanupAttrs: true,
                                },
                                {
                                    removeComments: true,
                                },
                            ],
                        },
                        optipng: {
                            optimizationLevel: 5,
                        },
                        pngquant: {
                            quality: '100',
                        },
                        mozjpeg: {
                            quality: 100,
                        },
                        ...options,
                    },
                },
            ],
        });
}
