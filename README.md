# Carusela.js

Overflow scroll based carousel, aiming for minimalist JS code manipulations by using CSS 'scroll' as animation in order to get most native like feeling in both desktop and mobile touch enabled devices.

[Check out the demo page](http://wallacode.github.io/carusela.js/)

![Demo](https://raw.githubusercontent.com/wallacode/carusela.js/master/app/images/demo-1.png "Demo")

## Features

* Back & forward buttons
* Using -webkit-overflow-scrolling for momentum scrolling
* RTL support (rtl as default)
* Handle with touch devices
* Smooth scrolling
* Fold scrolling
* Toggle backward button display

## Getting Started

Add to your code the carusela.js and carusela.css files.

```html
<link href="src/carusela.css" type="text/css" rel="stylesheet"/>
<script src="src/carusela.js"></script>
```

Initialize the Carusela class with any DOM element that contains any number of direct children.

```javascript
var carusela = new Carusela();
```

```html
<ul id="demo">
    <li><img src="http://www.walla.co.il/images/apple/common-color-1.png" alt="Slide #1">
    <li><img src="http://www.walla.co.il/images/apple/common-color-2.png" alt="Slide #2">
    <li><img src="http://www.walla.co.il/images/apple/common-color-3.png" alt="Slide #3">
    <li><img src="http://www.walla.co.il/images/apple/common-color-4.png" alt="Slide #4">
</ul>
```

## Bower

    bower install walla-carusela

## Optional

    var carusela = new Carusela({
        direction: 'ltr',             =>     rtl / ltr         (string)   
        scrollingPer : 'element',     =>     fold / element    (string) 
        toggleBackward : true         =>     true / false      (boolean)
    }).init();



## Roadmap

Stuff we need to add...

* Add build
* Add tests

## Follow Us

* Twitter - [https://twitter.com/wallacode](https://twitter.com/wallacode)
* Facebook - [https://www.facebook.com/wallacode](https://www.facebook.com/wallacode)
* GitHub - [https://github.com/wallacode](https://github.com/wallacode)
