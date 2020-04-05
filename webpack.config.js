const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

let isDev = process.env.NODE_ENV === 'development';
let isProd = !isDev;

const optimization = () => {
    let config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if( isProd ){
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const filename = (ext) => isProd ? `[name].${ext}` : `[chunkhash].${ext}`;

const cssLoaders = (extra) => {
    let loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options:{
            hmr: isDev,
            reloadAll: true
        },
    },
    'css-loader']

    if( extra ){
        loaders.push( extra );
    }

    return loaders;
}

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4000
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/images'),
                to: path.resolve(__dirname, './dist/images')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    }
}
