### 插入排序

插入排序对有序排序降到了 O(n)的级别

### 归并排序算法

```javascript
//分隔
function mergeSort(arr) {
  if (!arr || arr.length) {
    return []
  }

  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
//此处可以优化 先判断一下merge结果 leftMerge[mid]>rightMerge[mid+1] 在去merge操作
  return merge(mergeSort(left},mergeSort(right));//

}
//合并
function merge(left,right){
let result=[];
let leftIndex=0;
let rightIndex=0;
while(leftIndex<left.length&&rightIndex<right.length){
  let leftElement=left[leftIndex];
  let rightElement=right[rightIndex];
  if(leftElement<rightElement){
    result.push(leftElement)
    ++leftIndex;
  }else{
    result.push(rightElement);
    ++rightIndex;
  }
}
//检查剩余选项
while(leftIndex<left.length){
  result.push(left[leftIndex])
  ++leftIndex;
}

while(rightIndex<right.length){
  result.push(right[rightIndex]);
  ++rightIndex;
}

return result;
}
```
