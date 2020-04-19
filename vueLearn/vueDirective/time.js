Vue.directive("time",{
    bind:function(el,binding){
        console.log(el)
        el.innerHTML = binding.value + "北京时间";
        el.timeOut = setInterval(function(){
            el.innerHTML = binding.value + "一分钟前"
        },100*60)
    },
    //bind里面的定时器要在unbind里面清除
    unbind:function(el){
        //把el上面挂载的 定时器彻底清除掉
        clearInterval(el.timeOut)
        delete el.timeOut
    }
})