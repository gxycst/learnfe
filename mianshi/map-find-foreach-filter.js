function map(arr,func){
    var result=[];
    for(var i=0;i<arr.length;i++){
        result.push(func(arr[i],i,arr));
    }
    return result;
}

function filter(arr,func){
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            result.push(func(arr[i],i,arr));
        }
    }
    return result;
}