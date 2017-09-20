/*
 * Stylus dev loader.
 */
export default function stylusDev(options = {}) {
    const {
        styleOptions = {}, cssOptions = {}, stylusOptions = {},
    } = options;

    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: [
                {
                    loader: 'style-loader',
                    options: styleOptions,
                },
                {
                    loader: 'css-loader',
                    options: cssOptions,
                },
                {
                    loader: 'stylus-loader',
                    options: stylusOptions,
                },
            ],
        });
}
