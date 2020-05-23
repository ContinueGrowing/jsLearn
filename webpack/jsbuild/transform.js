//在style标签生效之前，对css进行最后的一次修改
module.export = function (css) {
    if (window.screen.width < 500) {
        css = css.replace('red', 'yellow')
    }
    return css;
}