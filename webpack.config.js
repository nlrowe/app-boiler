const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src'],
    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App',
            template: './src/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.styl/,
                loader: 'stylint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', {modules: false}],
                        'react',
                        'react-hmre',
                    ],
                    plugins: [
                        'react-hot-loader/babel',
                        'transform-object-rest-spread',
                    ],
                },
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]-[local]__[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => (
                                [autoprefixer]
                            ),
                            sourceMap: true,
                        },
                    },
                    'stylus-loader',
                ],
            },
        ],
    },
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
    },
    devtool: isProd ? '' : 'source-map',
}
