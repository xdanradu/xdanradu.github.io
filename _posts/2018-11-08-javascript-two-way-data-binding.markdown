---
layout: post
title:  "JavaScript Two way data binding"
date:   2018-11-08 15:00:00 +0300
categories: two way data binding
---

Two way data binding in SPA's (Single Page Applications) means that:
    1. if the data model is updated from the JavaScript code the changes will be propagated to the UI
    2. if the data model is updated from the UI the changes will get propagated to the JavaScript model

<br>![calc](/images/data-binding.png){:class="img-responsive"}

You can find [here](https://github.com/xdanradu/SourceCode/tree/master/data-binding) a simple algoritm that allows us to accomplish this. The logic is similar to AngularJS's dirty checking.
