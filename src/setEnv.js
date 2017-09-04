/*
 * Sets environment variables.
 */
export default function setEnv(options = {}) {
    Object.keys(options).forEach((name) => {
        process.env[name] = options[name];
    });

    return (context, {addPlugin}) => addPlugin(new context.webpack.EnvironmentPlugin(options));
}
