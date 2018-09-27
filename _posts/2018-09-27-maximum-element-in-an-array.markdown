---
layout: post
title:  "Find the maximum element in an array"
date:   2018-06-05 15:00:00 +0300
categories: algorithms
---

```javascript

function getMax(a){
	var max=Number.MIN_SAFE_INTEGER;
	for (var i=0;i<a.length;i++){
		if(max<a[i]) {
			max=a[i];
		}	
	}
	return max;
}

//example
console.log(getMax([-5, 4, 9, 20, 2]));

```
