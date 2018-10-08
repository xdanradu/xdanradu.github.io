---
layout: post
title:  "Javascript first app"
date:   2018-10-08 15:00:00 +0300
categories: javascript
---

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

_Requirements_:
 1. Refactoring: remove the duplicate code (better extensibility and maintainability)
 2. Restrict the counter to the range [ -50, 50 ]
 3. Implement a basic calculator that contains
  - input fields for two numbers
  - dropdown select for the operations [+, -, /, \*, %]
  - button for the equals function
  - span that displays the computed result
