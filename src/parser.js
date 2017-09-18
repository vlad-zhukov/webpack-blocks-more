/*
 * Parser options.
 */
export default function parser(options) {
    return (context, {addLoader}) =>
        addLoader({
            parser: options,
        });
}
