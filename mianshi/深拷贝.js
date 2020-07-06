function cloneDeep(obj) {
    let cloneObj = {};
    for (let attr in obj) {
        if (Object.prototype.toString.call(obj[attr]) === '[object Object]') {
            cloneObj=cloneDeep(obj[attr]);
        } else {
            cloneObj[attr] = obj[attr];
        }
    }
    return cloneObj;
}
function cloneDeepByJsonStringify(obj) {//缺点:函数、正则表达式的值会丢失，原对象的constructor构造函数会丢失。
    return JSON.parse(JSON.stringify(obj));
}

    //浅拷贝
    function shallowCopy(src) {
        var dis={};
        for(var attr in src){
            if(obj.hasOwnProperty(attr)){//检测是否有某个属性
                dis[attr]=src[attr]
            }
        }
        return dis;
    }

    //浅拷贝只能复制地址，如果下面有对象，则只会复制一个地址，原对象的值改变后，新的值也会改变。
