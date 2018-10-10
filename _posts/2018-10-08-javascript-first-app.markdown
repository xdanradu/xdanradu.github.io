---
layout: post
title:  "Javascript first app"
date:   2018-10-08 15:00:00 +0300
categories: javascript
---

- __HTML__ is a language that specifies the graphical structure of web apps
- __JavaScript__ is a programming language that manages the web apps logic. It is also used for complex UI components and animation.
- __CSS__ is a language that describes the HTML elements style

When a web page is loaded in the browser, a __Document Object Model (DOM)__ of the page is constructed. JavaScript can access and change all the elements of an HTML document trough the DOM. The DOM is an object represented as a tree.

The following application manages a counter using two buttons and a display area (increment/decrement):

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


  <script src="ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
  </script>
  <script src="script.js"></script>

</body>

</html>
```

We attached the JavaScript event handlers (inc/dec functions) to the buttons by using the inline onClick attribute on the button element.

The counter value is displayed in a \<span\> element. Some alternatives for displaying text values are: <p>, <h1>, <div>.

Also in the HTML file I included jQuery that helps us easily link a JavaScript object to the graphical element in HTML. After that we can change the UI object from JavaScript (ex: change the text, size, color).

```javascript
/* script.js */

// Counter declaration and initialization
var counter = 0;

/* jQuery allows us to briefly specify the DOM HTML object
we are referring to, in our case the element
with id="counter" > $("#counter") < and change it's text with the counter value */
$("#display-area").text(counter);

/* When we press + on the UI we call this function that increases
the counter value by one and refreshes the counter value on the UI
with the increased value */
function inc(){
  counter++;
  $("#display-area").text(counter);
}

function dec(){
  counter--;
  $("#display-area").text(counter);
}

```

__Requirements__:
 1. Restrict the counter to the [ 0, 2 ] range.
 2. Implement a basic calculator that allows the computation of [+, -, /, \*, %] operations between two numerical values. For this we need:
  - Input fields for the numbers
  - Dropdown select for the operations
  - Button for the equals function
  - Display the computed result in a span element
 3. Refactoring (_Read: [Coding Best Practices](http://danradu.ro/coding/best/practices/2018/10/09/coding-best-practices-1.html)_)
  - Remove the duplicated code for better extensibility and maintainability.
  - No magic numbers
  - All variables/objects must have specific/well defined names

  [Source code](https://github.com/xdanradu/SourceCode/tree/master/js-first-app)
