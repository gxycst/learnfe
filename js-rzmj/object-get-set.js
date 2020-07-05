let person={
    age:10,
    get age(){
        console.log("get")
    },
    set age(val){
        console.log("set")
    }
};
console.log(person)


for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, 100);
}