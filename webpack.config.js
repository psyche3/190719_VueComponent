const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/*ES6 
 */
module.exports = {
	// 模式: 生产环境
	//mode: 'production',
	// 入口
	entry: {
		app: path.resolve(__dirname, 'src/index.js')
	},
	// 出口(打包生成js)
	output: {
		filename: 'static/js/[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	// 模块加载器
	module: {
		rules: [{
			//处理ES6 ==>ES5
			test: /\.js$/, //用于匹配文件（对哪些文件进行处理）
			//exclude:/node_modules/,
			include: [path.resolve(__dirname, 'src')], //只针对哪些处理
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],//yu
					plugins:[
						
					]
				} 
				
			}
		},
		//处理CSS
		{
			test:/\.css$/,
			use:['style-loader','css-loader'],
		},
		  {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		    loader: 'url-loader',
		    options: {
		    limit: 1000,
		    name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
		          }
		    },
						
		
		]
	},
	// 插件
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html'
		})
	],
	devServer: {
		open: true, //自动打开游览器
		quiet: true, //不做太多日志输出
	},
	//开启source-map调试
	devtool: 'cheap-model-eval-source-map',
}
