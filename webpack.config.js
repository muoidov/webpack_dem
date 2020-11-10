const path = require('path');
const webpack = require('webpack');
const devServer = {
    port: 3000,
    open: true
}
const htmlwebpackp = require('html-webpack-pluginl');
const VEDOR_LIBS = [
    'babel-preset-es2016',
    'bootstrap',
    'font-awesome',
    'jquery',
    'react',
    'react-dom'
];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VEDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'output'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                use: ['css-loader', 'style-loader'], test: /.\css$/i
            }


            , {
                loader: 'file-loader',
                test: /.\jpe?g$|\.gif$|\.png$|\.svg$|.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    plugins: [new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
    }), new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'] //nhung file da buil roi thi ko build lai nua
    }), new htmlwebpackp({
        template: 'src/index.html'
    })

    ], devServer
}