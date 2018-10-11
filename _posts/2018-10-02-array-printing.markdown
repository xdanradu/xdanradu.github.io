---
layout: post
title:  "Array reverse and odd elements"
date:   2018-10-02 15:00:00 +0300
categories: simple algorithms
---

```javascript

function reverse(a){
  var reversed=[];
  for (var i=0;i<a.length;i++){
    reversed[i]=a[a.length-i-1];
  }
  return reversed;
}
console.log(reverse([-5, 4, 9, 20, 2]));//prints [ 2, 20, 9, 4, -5 ]
```

```js
function getOddElements(a){
  var elements=[];
  var index=0;
  for (var i=0;i<a.length;i++){
    if (a[i]%2 != 0) {
      elements[index]=a[i];
      index++;
    }
  }
  return elements;
}
console.log(getOddElements([-5, 4, 9, 20, 2]));//prints [ -5, 9 ]

```
