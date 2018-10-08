---
layout: post
title:  "Javascript first app"
date:   2018-10-08 15:00:00 +0300
categories: javascript
---

```html
<!-- index.html -->
<html>

<head>
  <title>JavaScript app</title>
</head>

<body>

  <button onClick="inc()">+</button>
  <span id="counter"></span>
  <button onClick="dec()">-</button>


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="script.js"></script>

</body>

</html>
```

```javascript
/* script.js */
var counter = 0;
$("#counter").text(counter);

function inc(){
  counter++;
  $("#counter").text(counter);
}

function dec(){
  counter--;
  $("#counter").text(counter);
}

```

__Requirements__:
 1. Refactoring (improve the legacy code above) - remove the duplicated code for better extensibility and maintainability. _Hint: the counter value should be displayed in one place only._
 2. Restrict the counter to [ -50, 50 ] range
 3. Implement a basic calculator that allows the computation of [+, -, /, \*, %] operations between two numerical values.
  - input fields for the numbers
  - dropdown select for the operations
  - button for the equals function
  - display the computed result in a span element
