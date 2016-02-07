'use strict'

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

let entry = [
    'babel-polyfill',
    './styles/styles.scss'
]

if (process.env.NODE_ENV !== 'production') {
    entry.push('webpack-hot-middleware/client')
}

entry.push('./index.js')

let config = {
    entry: entry,
    output: {
        path: BUILD_PATH,
        publicPath: '/',
        filename: 'index.js'
    },
    resolve: {
        alias: {
            config: path.resolve('./config/') + '/' + (process.env.NODE_ENV || 'development') + '.js',
            assets: path.resolve('./assets')
        }
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style!css!postcss!sass'
            }, {
                test: /\.json$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'json'
            }, {
                test: /\.(ico|mp4)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file?name=img/img-[hash:6].[ext]'
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                loader: 'url?limit=10000&name=img/img-[hash:6].[ext]'
            }, {
                test: /\.(woff2?|eot|ttf)$/i,
                exclude: /(node_modules|bower_components)/,
                loader: 'file?name=font/font-[hash:6].[ext]'
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ],
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
			React: "react",
			ReactDOM: "react-dom"
		}),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        })
    ],
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};

if (process.env.NODE_ENV !== 'production') {
    config.devtool = 'source-map'
}

module.exports = config
