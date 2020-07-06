function addCount() {
    var num=0;
    return function () {
        num++;
        console.log(num);
    }
}

var fn=addCount();
fn();//1
fn();//2