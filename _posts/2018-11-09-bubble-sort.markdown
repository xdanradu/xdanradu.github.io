---
layout: post
title:  "Bubblesort"
date:   2018-11-09 15:00:00 +0300
categories: algorithms
---

```javascript
function getSorted(arr){
  var sorted = false;
  while(sorted == false){
    sorted = true;
    for(var i=1;i<arr.length;i++){
      if (arr[i-1]>arr[i]){
        sorted = false;
        var aux= arr[i-1];
        arr[i-1]=arr[i];
        arr[i]=aux;
      }
    }
  }
  return arr;
}
```