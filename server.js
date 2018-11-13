'use strict'

const webpack = require('webpack')
const WebpacDevServer = require('webpack-dev-server')
const config = require('./webpack.config') 

new WebpacDevServer(webpack(config), {
    piblicPaht: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(3000, (err) => {
    if(err) {
        console.log(err)
    }
    console.log('Listening on http://localhost:3000')
})