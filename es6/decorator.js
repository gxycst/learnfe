function xiushiqi(mubiao){
	mubiao.names="我是修饰器的名字";
}
@xiushiqi
class MyComponent{

}
console.log(MyComponent.names);