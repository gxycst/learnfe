function l(){console.log(arguments[0]);}
var obj={
	myName:'seven',
	getName:function(){
		return this.myName
	}
}


function textF(c){
	c && c();
}

function sa(){
	console.log('s');
}
textF(sa);

