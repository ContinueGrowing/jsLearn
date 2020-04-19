import 'babel-polyfill'
import './test.ts'
setTimeout(() => {
    console.log("app.js");
}, 100)

new Promise(setTimeout(()=>{
    console.log("测试 polyfill")
}))

async function a(){

}