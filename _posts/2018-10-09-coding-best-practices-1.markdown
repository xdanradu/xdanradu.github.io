---
layout: post
title:  "Coding best practices 1"
date:   2018-10-09 15:00:00 +0300
categories: coding best practices
---

Code refactoring means __improving the quality of existing code__. In this post I will share 3 really simple steps that will help you
improve the readability, extensibility and maintainability of your code:

1. [Remove code duplication](#1-remove-code-duplication)
2. [Avoid magic numbers](#2-avoid-magic-numbers)
3. [Invest time in the naming of your variables and functions](#3-invest-time-in-the-naming-of-your-variables-and-functions)

# 1. Remove code duplication

The following code snippet manages the increase/decrease of a counter that is bound to an HTML element by id with jQuery (ex: _<div id="display-area"></div>_):

```javascript
var counter = 0;
$("#display-area").text(counter);

function inc(){
  counter++;
  $("#display-area").text(counter);
}

function dec(){
  counter--;
  $("#display-area").text(counter);
}

```

We have two functions (inc and dec) that will be triggered when the user presses + or - buttons on the UI and will increase/decrease the JavaScript "counter" variable value and refresh it on the UI.

If you have to change the way you display the counter value, for example simply change the id of the HTML element or maybe you will also want to save it to a text file/database,
you will have to change it in every place this line of code was used (this could be in numerous files).

In this case you should __extract the duplicated code in a single function and call it from any place in your project.__ In this way, when you have to change the display function in the future you will manage it only in one place/file.
This means that your software will be more stable since the probability to introduce coding bugs will be diminished. Also, the effort to change the code in numerous places will not be necessary anymore.

For simplicity's sake the example above contains only one line of code that refreshes the counter value on the UI. But in a more complex application this could be a bit more complicated.

The __refactored code__ could look like this:


```javascript
var counter = 0;

function displayCounterOnUi(){
  $("#display-area").text(counter);
}

displayCounterOnUi();

function inc(){
  counter++;
  displayCounterOnUi();
}

function dec(){
  counter--;
  displayCounterOnUi();
}

```

Above you see that I didn't change the initial behavior of the code but I just extracted one line of code in
a separate function. This function could be also testable if it would describe let's say an algorithm that returns a value.

# 2. Avoid magic numbers

If your code contains __hardcoded values__ (known as __magic numbers__) usually they have a specific meaning and they can be either constants or simple variables. Consider the code
bellow:

```javascript
var counter = 0;

function inc(){
  if (counter < 10) counter ++;
}

function dec(){
  if (counter > 0) counter --;
}

function setCounter(a){
  if (a > 0 && a <10) counter=a;
}

```

In this example we have two magic numbers (0 and 10) that restrict the counter value to a required range of values. We can __use constants that are declared and initialized only in one place__. This will lead to __better code readability and maintainability__. Since the magic numbers are used in multiple places we can will also target the
code duplication problem.

Code after first refactoring:

```javascript
var counter = 0;
var MIN_COUNTER = 0;
var MAX_COUNTER = 10;

function inc(){
  if (counter < MAX_COUNTER) counter ++;
}

function dec(){
  if (counter > MIN_COUNTER) counter --;
}

function setCounter(a){
  if (a > MIN_COUNTER && a < MAX_COUNTER) counter = a;
}

```

The advantage is already noticeable even in this really simple example. When I will need to change those two values [0, 10] to let\'s say [-2, 2] I will have to do only two changes (when I initialize the constants) instead of four (in the old code where the magic numbers were used).

Think about the benefits of constants instead of magic numbers when you use this values in tens of places all over your project.

# 3. Invest time in the naming of your variables and functions

When you have to change something in legacy code you never want to step over something like this:

```javascript
function get_ct(sc, p){
  var s = 0;
  for (int i = 0; i < 10; i++) {
        s+= (sc[i] * 0.12 + 3) + p[i] * 0.15;
  }
  return s;
}
```


Always __take the time to give your variables and functions specific/suggestive names__ even if it takes a bit of effort. This will pay off hugely in the long run.

Your __code should be readable and clearly state it's purpose__. This will definitely save you a lot of time and effort spent on surfing over the project
trying to figure out what the previous programmer taught when he/she implemented it in the first place.

The previous snippet should look something more like this:

```javascript
function getTotalCostFor(articles){
  var totalCost = 0;

  var shippingTaxRate = 0.12;
  var articleDiscountRate = 0.15;
  var fixedShippingCost = 3;

  for (var i = 0; i < articles.length; i++) {
    var articlePrice = articles[i].price * articleDiscountRate;
    var shippingCost = articles[i].weight * shippingTaxRate + fixedShippingCost;
    var articleFinalCost = articlePrice + shippingCost;
    totalCost += articleFinalCost;
  }

  return totalCost;
}
```
