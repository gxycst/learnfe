var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname); //当前文件路径
var REACT_PATH = path.resolve(ROOT_PATH,'react'); //项目文件夹
var REACT_BUILD_PATH = path.resolve(ROOT_PATH,'react_build'); //打包后的文件夹

var CSS_PATH = path.resolve(ROOT_PATH,'bower_components');

module.exports = {
	entry:{
		index:path.resolve(REACT_PATH,'index.jsx')
	}, //默认找到文件夹中的index.js
	output:{
		path:REACT_BUILD_PATH,
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:['style','css'],
				include:REACT_PATH
			},
			{
				test:/\.less$/,
				loaders:['style','css','less'],
				include:CSS_PATH
			},
			{ test: /\.(eot|woff|svg|ttf|woff2)$/, loader: "file-loader" },
			{
		        test: /\.jsx?$/,
		        loaders: ['react-hot','babel?presets[]=es2015&presets[]=react'],
		        include: REACT_PATH
		    }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx','.css']
  	},
	devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"My first react app",
			chunks:['index']
		})
	]
}
