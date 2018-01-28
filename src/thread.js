import threadLoader from 'thread-loader';

/*
 * Thread loader.
 */
export default function thread(options = {}) {
    const {warmupModules, ...restOptions} = options;
    if (warmupModules) {
        threadLoader.warmup(restOptions, warmupModules);
    }

    return (context, {addLoader}) =>
        addLoader({
            ...context.match,
            use: [
                {
                    loader: 'thread-loader',
                    options: restOptions,
                },
            ],
        });
}
