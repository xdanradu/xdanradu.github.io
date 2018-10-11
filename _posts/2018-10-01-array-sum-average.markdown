---
layout: post
title:  "Array sum and average"
date:   2018-10-01 15:00:00 +0300
categories: simple algorithms
---

```javascript

function getSum(a){
  var sum=0;
  for (var i=0;i<a.length;i++){
    sum+=a[i];
  }
  return sum;
}
console.log(getSum([-5, 4, 9, 20, 2]));//prints 30
```

```js
function getAverage(a){
  var sum=0;
  for (var i=0;i<a.length;i++){
    sum+=a[i];
  }
  return sum/a.length;
}
console.log(getAverage([-5, 4, 9, 20, 2]));//prints 6

```
