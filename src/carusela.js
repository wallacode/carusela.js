(function (_) {

    'use strict';

    /**
     * Carusela.js
     *
     * Overflow scroll based carousel, Aiming for minimalist JS code manipulation.
     *
     * Features:
     * * Back & forward buttons
     * * Number of folds in scroll
     * * Current fold
     *
     * @returns {{}}
     */

    var
    /**
     * Default values
     * @type {object}
     */
    config = {
        direction : 'rtl',
        scrollingPer : 'element',
        toggleBackward : false
    };

    _.Carusela = function (_config) {
        if (_config) {
            this.setConfig(_config);
        }

        var wrapper         = document.createElement('div'),
            backwardElement = document.createElement('button'),
            forwardElement  = document.createElement('button'),
            element         = document.getElementById('demo'),
            currenScrollPos = 0,
            signDirection   = config.direction == 'ltr' ? '-' : '+',
            counter         = document.getElementById('counter'),
            index           = 1,
            elemPerFold,
            elemWidth,
            scrollingPer,
            totalElements
        ;
        
        wrapper.className           = 'carusela ' + config.direction;
        backwardElement.innerText   = 'Backward';
        backwardElement.className   = 'backward ' + config.direction;
        forwardElement.innerText    = 'Forward';
        forwardElement.className    = 'forward ' + config.direction;

        wrapper.setAttribute('dir', config.direction);

        setTimeout(function(){
               // Bind image loading event
                elemWidth         = element.children[1].offsetWidth + 10;
                elemPerFold       = Math.floor(document.getElementsByClassName(wrapper.className)[0].offsetWidth / (elemWidth - 10));
                totalElements     = elemWidth * (element.children.length - elemPerFold);
                scrollingPer      = config.scrollingPer == 'element' ? 1 : elemPerFold;

                if (config.scrollingPer !== 'element') counter.innerHTML = index + '/' + elemPerFold;
                if(config.toggleBackward) backwardElement.style.display = 'none';

        },0);

        /**
         * Build DOM structures
         *
         * @returns
         * @public
         */
        this.init = function () {
            // Add 'virtual' DOM elements
            element.parentNode.replaceChild(wrapper, element);
            wrapper.appendChild(element);

            if (!__isTouchDevice()) {
                wrapper.style.overflow = 'hidden';

                // Adding buttons
                wrapper.parentNode.appendChild(backwardElement);
                wrapper.parentNode.appendChild(forwardElement);
            }

            __attachEvents();
        };

        /**
         * Attach events
         *
         * @returns
         * @private
         */
        function __attachEvents() {
            forwardElement.addEventListener('click', function () {
                if(totalElements <= currenScrollPos * scrollingPer) return;
                if (config.scrollingPer !== 'element') counter.innerHTML = ++index + '/' + elemPerFold;

                backwardElement.style.display = 'block';
                currenScrollPos += elemWidth;
                __startAnimate();
                
                if(totalElements <= currenScrollPos * scrollingPer) forwardElement.style.display = 'none';
            });

            backwardElement.addEventListener('click', function () {
                if(currenScrollPos == 0) return;
                if (config.scrollingPer !== 'element') counter.innerHTML = --index + '/' + elemPerFold;

                forwardElement.style.display = 'block';
                currenScrollPos -= elemWidth;
                __startAnimate();

                if(currenScrollPos == 0) backwardElement.style.display = 'none';
            });
        }
        
        /**
         * Get information on touch devices
         *
         * @returns {boolean}
         * @private
         */
        function __startAnimate() {
            element.style.transform = 'translate3d(' + signDirection + currenScrollPos * scrollingPer + 'px, 0, 0)';
            element.style.webkitTransform = 'translate3d(' + signDirection + currenScrollPos * scrollingPer + 'px, 0, 0)';
        }

        /**
         * Get information on touch devices
         *
         * @returns {boolean}
         * @private
         */
        function __isTouchDevice() {
            return 'ontouchstart' in window ||       // works on most browsers
                    navigator.maxTouchPoints;       // works on IE10/11 and Surface
        }
        
        return this;
    };

    _.Carusela.prototype.setConfig = function (_config) {
        for (var k in _config) {
            if (_config.hasOwnProperty(k)) {
                config[k] = _config[k];
            }
        }
    };

}(window));