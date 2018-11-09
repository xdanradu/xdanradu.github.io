---
layout: post
title:  "JavaScript two way data binding"
date:   2018-11-08 15:00:00 +0300
categories: two way data binding
---

Two way data binding in SPA's (Single Page Applications) means that:

- If the data model is updated from the JavaScript logic the changes will be propagated to the UI
- If the data model is updated from the UI the changes will get propagated to the JavaScript model

<br>![calc](/images/data-binding.png){:class="img-responsive"}

[Here](https://github.com/xdanradu/SourceCode/tree/master/data-binding) you can find a simplified algorithm that allows two way data binding for simple input elements using dirty checking (simillar to Angular JS).
