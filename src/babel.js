/*
 * Babel loader.
 */
export default function babel(options = {}) {
    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: {
                loader: 'babel-loader',
                options,
            },
        });
}
