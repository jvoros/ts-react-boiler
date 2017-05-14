import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { join } from 'path';


module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: join(__dirname, "/dist")
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader"
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader"
            },
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            hash: true 
        })
    ]
};
