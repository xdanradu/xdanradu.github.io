---
title: HTML elements positioning types
description: Positioning
sidebar_label: Positioning
---

- **static**
  - by default
  - not affected by top, bottom, left, right
- **relative**
  - relative to element's normal position
- **fixed**
  - relative to the viewport
  - stays in the same place even if the page is scrolled
- **absolute**
  - relative to its nearest positioned ancestor
  - if no positioned ancestors are found, document body will be used
  - takes the element out of the normal flow and can overlap other elements
  - moves along with page scrolling
- **sticky**
  - positioned based on user's scroll position
  - hybrid between relative and fixed
  - it's positioned relative until a given offset position in the viewport and then it stays fixed

Position must be set first before we can use top, bottom, left, right properties.

### Float property

- It specifies if an element should float on the left or right. 
- Elements that are positioned absolute will ignore this property.
- Elements close to a floating element will flow around it. To avoid this the clear property can be used.

### Hands on
1. [All types](https://stackblitz.com/edit/web-platform-d28us6?file=styles.css)
2. [Absolute, relative and float](https://stackblitz.com/edit/web-platform-ftogmz?file=styles.css)
3. [Float clearfix](https://stackblitz.com/edit/web-platform-zfmawu?file=styles.css)
