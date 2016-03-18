var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var htmls = [];

function  genHtml(entryMap) {

    function doGen (entry) {
        if( entry == 'react' || entry == 'jquery')return;
        var template = './app.html';
        var hw = new HtmlWebpackPlugin({
            filename: entry+'.html',
            template: template,
            inject:true,
            chunks:['react', 'jquery', entry],

            chunksSortMode:(function (entry) {
                return function  (a,b) {
                        var aEntry = a.origins[0].name,
                            bEntry = b.origins[0].name;

                        
                        if( aEntry=='react' )return -1;
                        if( aEntry=='jquery' && bEntry !='react' ) return -1;

                        if( bEntry == 'react' )return 1;
                        if( bEntry == 'jquery' )return 1;
                    }
            })(entry)
        });

        htmls.push(hw);
    }

    for( var entry in entryMap ){
        doGen(entry);
    }
}


var entryObject = {
    app: "./app.js",
    // login:'./src/compoents/user/login.js',
    react: ["react"]
}

genHtml(entryObject);

module.exports = {
    entry: entryObject,
    
    output: {
        path: '../release/',
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=8000'
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            }
        ]
    },

    plugins:[
        new ExtractTextPlugin('[name].css', {
            allChunks:true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new CopyWebpackPlugin([{
            from: './comm',
            to:'../release/comm'
        }]),
        new webpack.optimize.CommonsChunkPlugin({
            name:['react'],
            minChunks:Infinity
        })
    ].concat(htmls)
};