---
layout: post
title:  "Bubblesort"
date:   2018-11-09 15:00:00 +0300
categories: algorithms
---

# Version 1

```javascript
function getSorted(arr) {
    var i, j, aux, swapped;
    for (i = 0; i < arr.length - 1; i++) {
      swapped = false;
      for (j = 0; j < arr.length-i-1; j++) {
        if (arr[j] > arr[j + 1]) {
          aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
          swapped = true;
        }
      }
      if (swapped == false)
        break;
    }
    return arr;
}
```

# Version 2

```javascript
function getSorted(arr) {
  var sorted = false;
  while(sorted == false) {
    sorted = true;
    for(var i = 1;i<arr.length;i++) {
      if (arr[i-1]>arr[i]) {
        sorted = false;
        var aux = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = aux;
      }
    }
  }
  return arr;
}
```