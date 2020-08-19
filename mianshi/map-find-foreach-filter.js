function mapUser(arr,func){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(func(arr[i],i,arr));
    }
    return result;
}

function filterUser(arr,func){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            result.push(func(arr[i],i,arr));
        }
    }
    return result;
}
手动实现的map和filter方法；mapUser filterUser