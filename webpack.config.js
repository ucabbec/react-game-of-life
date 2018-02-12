//needs to be in root of folder and should be in root of folder
//is a node file
//Two bits of information needed for webpack file
//1)Where the entry point is 
//2)Where to output the bundled .js file

//node module which concats path
const path = require('path');

module.exports = {
	entry:'./src/app.js',
	output:{
		//needs to be absolute path of file on machine
		path: path.join(__dirname,'public'),
		filename:'bundle.js'
	},
	//module has one object which is an array called 'rules'
	//rules is an array of objects, each object defines the loaders for the porject
	module:{
		rules:[{
			loader:'babel-loader',
			test:/\.js$/,
			exclude:/node_modules/
		},{
			test:/\.s?css$/,
			use:['style-loader','css-loader','sass-loader']
		}]
	},
	//If there is an error in the code this will say which file it is in, rather than the bundle.js file
	devtool: 'cheap-module-eval-source-map',
	//used to set up a development server
	//set up a script in package.json with the command 'webpack-dev-server'
	//has one object 'contentBase' which takes the path the bundled file as an argument
	devServer: {
		contentBase: path.join(__dirname,'public')
	}
};