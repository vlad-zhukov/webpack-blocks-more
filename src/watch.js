/*
 * Webpack file watch.
 */
export default function watch(options) {
    return (context, {merge}) =>
        merge({
            watch: true,
            watchOptions: options,
        });
}
