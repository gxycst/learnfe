function cloneDeep(obj) {
    let cloneObj = {};
    for (let attr in obj) {
        if (Object.prototype.toString.call(obj[attr]) === '[object Object]') {
            cloneDeep(obj[attr]);
        } else {
            cloneObj[attr] = obj[attr];
        }
    }
    return cloneObj;
}
function cloneDeepByJsonStringify(obj) {
    return JSON.parse(JSON.stringify(obj));
}