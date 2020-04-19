module.exports = {
    // entry : "./app.js",
    //或者以数组的形式定义  最终会把这两个文件打包到一个文件里
    // entry : ['./app.js','./module1.js', ]
    //或者以对象的形式  这样会打包成两个文件，和上面相区别
    mode: 'development',
    entry: {
        app1212: "./app.js",
        // app2:"./module1.js", 
    },
    output: {
        // __dirname d代表当前配置文件所在目录 
        //绝对目录
        path: __dirname + "/src/mybundle", //指定dist的位置和名字
        // filename:"bundle.js",
        filename:"./js/[name].[hash:4].js",  //app1212.dkflgjsdfgj123.js  
        // filename:"[name].[hash:4].js",  //[hash:4]  截取hash前四位
        // filename: "./js/[name].[hash:4].js",  //文件位置   dist/js/app1212.dkfl.js

    },
    module: {
        //配置loader
        rules: [
            {
                test:/\.js$/,  //处理js文件
                // use:'babel-loader',
                // use:{
                //     loader:'babel-loader',
                //     //配置
                //     options:{... }
                // } 
                //多个loader
                //use:[{},{}]
            }
        ]
    },
    plugins:[
        // new ...()
    ]
}