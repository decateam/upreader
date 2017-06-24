var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

var extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

var appname = "app name";
var appsrcname = "upreader";

module.exports = {

	entry: {
        index: './src/app/index.jsx'
    },

    output: {
        path: __dirname + '/build',
        filename: appsrcname+'.js'
    },
	
	
    module: {
        loaders: [
            { test : /\.jsx?/, include : __dirname + '/src/app', loader : 'babel-loader' },
            { test: /\.(pug|jade)$/, loaders: [ 'raw-loader','pug-html-loader']},
            { test: /\.(js)$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.json$/, loader: 'json-loader' },
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
				

			},
        
            { test   : /\.css$/, loaders: ['style-loader', 'css-loader', 'resolve-url-loader']}, 	
			{ test: /\.(woff|woff2|ttf|svg|eot)/, loader: 'file-loader?name=/fonts/[name].[ext]'},
            { test: /\.(png|jpg)$/,    loader: "file-loader?name=/images/[name].[ext]" }
        ]
    },
	plugins: [
		extractSass,
		new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', foundation: "foundation" }),
		new UglifyJsPlugin({
		    mangle: false,
			comments: false
		}),
        new HtmlWebpackPlugin({
			title: appname,
            template: './src/public/index.html',
            inject: true
        }),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer'
		})
    ],
	externals: {
		jQuery: "jquery"
	},
    devServer: {
        contentBase: './src/public',
        stats: 'minimal'
    }

};
