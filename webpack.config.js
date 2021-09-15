module.exports = {
    // Set the mode to "development"; Fallback is "production"; In "development" you can better debug your application
    mode: "development",

    // minimum required parameter for webpack `entry`, `output`
    entry: './src/js/app.js',
    output: {
        // path must be absolute
        path: `${__dirname}/build/public/`,
        filename: "bundle.js"
    },

    // Nr. 5 - module rule generate sass to css and then to head inline style
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    }
                ],
            },
        ],
    },
}
