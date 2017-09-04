/*
 * Babel loader.
 */
export default function babelLoader(options = {}) {
    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: {
                loader: 'babel-loader',
                options,
            },
        });
}
