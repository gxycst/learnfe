var str='https://www.baidu.com?a=1&b=2&c=3';
function parseUrl(str){
    let obj={};
    let paramStr=str.split('?')[1];
    let strArr=paramStr.split('&');
    for(let item of strArr){
        let keyVal=item.split('=');
        obj[keyVal[0]]=keyVal[1];
    }
    return obj;
}

parseUrl('https://www.baidu.com?a=1&b=2&c=3');


var str2='123abcd456';

function getNumberFromStr(str){//返回数字
    let fStr="";
    for(var i=0;i<str.length;i++){
        if(!isNaN(str.charAt(i))){
            fStr+=str.charAt(i);
        }
    }
    return fStr;
}

function getNumber2xAndStrZkh(str){//数字乘以2再给字符串加中括号
    let strArr=str.split('');
    for(let i=0;i<strArr.length;i++){
        if(!isNaN(strArr[i])){
            strArr[i]*=2;
        }else{
            strArr[i]=`[${strArr[i]}]`;
        }
    }
    return strArr.join('')
}


//

