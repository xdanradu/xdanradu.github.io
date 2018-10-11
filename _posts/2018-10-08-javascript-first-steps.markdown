---
layout: post
title:  "JavaScript first steps"
date:   2018-10-08 15:00:00 +0300
categories: javascript
---

- __HTML__ is a language that specifies the graphical structure of web apps
- __JavaScript__ is a programming language that manages the web apps logic. It is also used for complex UI components and animation.
- __CSS__ is a language that describes the HTML elements style

When a web page is loaded in the browser, a __Document Object Model (DOM)__ of the page is constructed. JavaScript can access and change all the elements of an HTML document trough the DOM. The DOM is a tree object in which the root is the \<html\> element.

The following application implements a simple counter using two buttons and a display area (increment/decrement):

```html
<!-- index.html -->
<html>

<head>
  <title>JavaScript app</title>
</head>

<body>

  <button onClick="inc()">+</button>
  <span id="display-area"></span>
  <button onClick="dec()">-</button>


  <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
  </script>
  <script src="script.js"></script>

</body>

</html>
```

We attached the JavaScript event handlers (inc/dec functions) to the buttons by using the inline __onClick__ attribute on the button element.

The counter value is displayed in a __\<span\>__ element. Some alternatives for displaying text values are: __\<p\>__, __\<h1\>__, __\<div\>__.

Also in the HTML file I included jQuery library that helps us easily link a JavaScript object to the graphical element in HTML. After that we can control the UI object from JavaScript (ex: change the text, size, color, position).

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

__Useful tips__

- For the JS app above you need to create a folder and two files _index.html_ an _script.js_. To run the application just open _index.html_ in any browser.

- jQuery can give you control over an HTML element by using the shorthand __$("#uniqueId")__ syntax. The id must be equivalent to the one specified in HTML.

__\<input type="text" id="user"/\>__
    - Read input text value: $("user").text()
    - Set input text value: $("user").text("hello")

__\<input type="range" id="counter"/\>__
    - Read range/select value: $("counter").val()
    - Set range/select text value: $("counter").text(value)

- For debugging you can print messages from the JS script to the browser console (F12 > Console) with __console.log("message")__

- To convert string values to int you can use __parseInt("number")__ function.


[Source code for the example](https://github.com/xdanradu/SourceCode/tree/master/js-first-app)

__TO DO's__:
 1. Change the given code:
  - Restrict the counter to the [ 0, 2 ] range.<br>
  - Use an __\<input type="range"\>__ element instead of __\<span\>__ to display the counter graphically.
<br><br>

 2. Implement a basic calculator that allows the computation of [+, -, /, \*, %] operations between two numerical values. For this we need:
  - Input fields for the numbers
  - Dropdown select for the operations
  - Button for the equals function
  - Display the computed result in a span element  
<br>_Example:_ <input value="1"/><select><option>+</option><option>-</option></select><input value="2"><button>=</button>3
<br><br>

3. Refactor your code for the previous example (_Hint: [Coding Best Practices](http://danradu.ro/coding/best/practices/2018/10/09/coding-best-practices-1.html)_)
 - Remove the duplicated code for better extensibility and maintainability.
 - No magic numbers
 - All variables/objects must have specific/well defined names
<br><br>
4. Extend the calculator from point 3. Requirements:
- The input expression computation algorithm should be implemented in a testable function called __getResult(expression)__ This function can be called from any place in your application and could call multiple functions if necessary.
- The result of the __getResult(expression)__ function is tested using at least 10 different input expressions.
Test example: _console.log(compute("5+20*9-17/2") == 176.5 ? "Passed":"Failed");_
- [__eval()__ function not allowed](https://stackoverflow.com/questions/86513/why-is-using-the-javascript-eval-function-a-bad-idea).
- [Clean code only](http://danradu.ro/coding/best/practices/2018/10/09/coding-best-practices-1.html).
- [O(n) time and space complexity](https://www.geeksforgeeks.org/expression-evaluation).
- The UI should have the following structure/components but you can customize the CSS style however you want:

<br>![calc](/images/calc.png){:class="img-responsive"}
