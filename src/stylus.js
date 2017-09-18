/*
 * Stylus loader.
 */
export default function stylus(options = {}) {
    const {
        fileOptions = {}, extractOptions = {}, cssOptions = {}, stylusOptions = {},
    } = options;

    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: [
                {
                    loader: 'file-loader',
                    options: fileOptions,
                },
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
                    options: Object.assign(
                        {
                            compress: true,
                        },
                        stylusOptions
                    ),
                },
            ],
        });
}
