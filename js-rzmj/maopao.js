function sory(arr){
    var count=arr.length-1;
    for(var i=0;i<count;i++){
        for(var j=0;j<count-j;j++){
            if(arr[j]<arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}