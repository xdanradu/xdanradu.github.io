---
layout: post
title:  "Array minimum and maximum"
date:   2018-09-27 15:00:00 +0300
categories: simple algorithms
---

```js

function getMin(a){
  var min=Number.MAX_SAFE_INTEGER;
  for (var i=0;i<a.length;i++){
    if(min>a[i]) {
      min=a[i];
    }
  }
  return min;
}

console.log(getMin([-5, 4, 9, 20, 2]));//prints -5
```

```js
function getMax(a){
  var max=Number.MIN_SAFE_INTEGER;
  for (var i=0;i<a.length;i++){
    if(max<a[i]) {
      max=a[i];
    }
  }
  return max;
}
console.log(getMax([-5, 4, 9, 20, 2]));//prints 20

```
