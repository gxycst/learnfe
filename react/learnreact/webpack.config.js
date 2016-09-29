var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');//可以在body中用script来包含build出来的文件

module.exports = {
  entry:[
 'webpack/hot/dev-server',
 'webpack-dev-server/client?http://localhost:8080',
  path.resolve(__dirname, 'app/main.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins:[new HtmlWebpackPlugin()]
};