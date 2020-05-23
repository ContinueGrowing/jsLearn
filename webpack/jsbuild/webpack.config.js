module.exports = {
    mode:"development",
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "./[name].[hash:5].js",
    },
    module: {
        rules: [
            {
                test:/\.less$/,
                use:[
                    {
                        loader:'style-loader',
                        options:{
                            insertAt:'top',
                            insertInto:'#mydiv',
                            singleton:true,
                            //在css放到页面之前用js对css进行修改
                            transform:"./transform.js",
                        }
                    },
                    {
                        loader:'css-loader',
                        options:{
                            module:{
                                //把local的类名指定形式 test2_div1_1522
                                localIdentName:'[path][name]_[local]_[hash:4]',
                            }
                        }
                    },
                    {
                        loader:'less-loader',
                        options:{
                            
                        }
                    },
                ]
            {
                test: /\.js$/,
                //Presets是储存js不同标准的插件，通过使用正确的Presets，告诉babel按照那个标准编译
                //常见规范
                // es2015
                // es2016
                // es2017
                // env(常用)
                // babel-preset-stage
                //npm install @babel/preset-env --save-dev
                /****target是preset的核心配置，告诉preset编译的具体目标
                 * target可以
                 * 以browsers为目标(通常情况)
                 * 以node版本为目标
                 * 以特定的浏览器为目标
                 */
                use: {
                    loader:"babel-loader",
                    options:{
                        
                    }
                }
            },
            {
                test:/\.tsx?$/,
                use:"ts-loader",
            }
        ]
    }
}