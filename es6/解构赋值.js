function test(...values){
	console.log(Object.prototype.toString.call(values));
	console.log(...values);
};
/*函数的rest参数是一个数组，只能位于最后,函数的length(新参数量)不包含values数.这个参数有点像arguments属性，只不过是一个真数组
console.log(...[1,2,3]);//扩展运算符,把一个数组的每个元素拎出来。
...可以将任何类数组转成数组,和Array.from()类似.也可以将字符串转成数组，如[...'hello']  =>  ['h','e','l','l','o'],
还可以返回字符串长度，避免32位unicode字符长度识别不准确问题  [...'str'].length
*/

//对象也有此类功能的扩展运算符,大同小异