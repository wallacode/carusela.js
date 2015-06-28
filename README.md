# Carusela.js

Overflow scroll based carousel, aiming for minimalist JS code manipulations by using CSS 'scroll' as animation animation.

## Features

* Back & forward buttons
* Using -webkit-overflow-scrolling for momentum scrolling

## Getting Started

Add to your code the carusela.js and carusela.css files.

```html
<link href="src/carusela.css" type="text/css" rel="stylesheet"/>
<script src="src/carusela.js"></script>
```

Initialize the Carusela class with any DOM element that contains any number of direct children.

```javascript
var carusela = new window.Carusela(document.getElementById('demo'));
```

```html
<ul id="demo">
    <li><img src="http://www.walla.co.il/images/apple/common-color-1.png" alt="Slide #1">
    <li><img src="http://www.walla.co.il/images/apple/common-color-2.png" alt="Slide #2">
    <li><img src="http://www.walla.co.il/images/apple/common-color-3.png" alt="Slide #3">
    <li><img src="http://www.walla.co.il/images/apple/common-color-4.png" alt="Slide #4">
</ul>
```

## Roadmap

Stuff we need to add...

* Add build
* List on bower
* Add tests
* Disable buttons when no scroll available
* Add RTL support
* Add folds support
* Add optional values

## Follow Us

* Twitter - [https://twitter.com/wallacode](https://twitter.com/wallacode)
* Facebook - [https://www.facebook.com/wallacode](https://www.facebook.com/wallacode)
* GitHub - [https://github.com/wallacode](https://github.com/wallacode)