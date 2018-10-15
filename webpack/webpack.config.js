
module.exports = {
    //文件入口
    entry: './src/index.js',
    //文件出口
    output: {
        path: __dirname,       //打包后的路径
        filename: './build/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                //打包除这个文件之外的文件
                exclude: /(node_modules)/
            }
        ]
    }
}