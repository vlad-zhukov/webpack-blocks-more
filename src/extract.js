/*
 * Extract loader.
 */
export default function extract(options = {}) {
    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: [
                {
                    loader: 'extract-loader',
                    options,
                },
            ],
        });
}
