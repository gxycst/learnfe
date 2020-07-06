function binary_search(arr,value) {
    let low=0;
    let high=arr.length-1;
    while (low<=high){
        let mid = parseInt((high + low) / 2);
        if(value==arr[mid]){
            return mid;
        }else if(value>arr[mid]){
            low=mid+1;
        }else if(value<arr[mid]){
            low=mid-1;
        }else{
            return -1;
        }
    }
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
一定是先排序

二分法查找，也称折半查找，是一种在有序数组中查找特定元素的搜索算法。查找过程可以分为以下步骤：
（1）首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。
（2）如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。
（3）如果某一步数组为空，则表示找不到目标元素。