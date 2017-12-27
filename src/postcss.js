/*
 * PostCSS loader.
 */
export default function postcss(options = {}) {
    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: [
                {
                    loader: 'postcss-loader',
                    options,
                },
            ],
        });
}
