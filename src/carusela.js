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
        scrolling : 'element' // or fold
    };

    _.Carusela = function (_config) {
        if (_config) {
            this.setConfig(_config);
        }

        var wrapper         = document.createElement('div'),
            backwardElement = document.createElement('button'),
            forwardElement  = document.createElement('button'),
            element         = document.getElementById('demo'),
            movingScale     = 100
        ;
        
            wrapper.className           = 'carusela';
            backwardElement.innerText   = 'Backward';
            backwardElement.className   = 'backward';
            forwardElement.innerText    = 'Forward';
            forwardElement.className    = 'forward';

            wrapper.setAttribute('dir', config.direction);

        /**
         * Build DOM structures
         *
         * @returns
         */
        this.init = function () {
            // Add 'virtual' DOM elements
            element.parentNode.replaceChild(wrapper, element);
            wrapper.appendChild(element);

            if (!isTouchDevice()) {
                // Adding buttons
                wrapper.parentNode.appendChild(backwardElement);
                wrapper.parentNode.appendChild(forwardElement);
            }

            attachEvents();
        };

        /**
         * Attach events
         *
         * @returns 
         */
        function attachEvents() {
            forwardElement.addEventListener('click', function () {
                wrapper.scrollLeft += movingScale;
            });

            backwardElement.addEventListener('click', function () {
                wrapper.scrollLeft -= movingScale;
            });
        }

         /**
         * Get current position fold number
         *
         * @param scroll
         * @param width
         * @returns {number}
         */
        function getCurrentFold(scroll, width) {
            return Math.ceil(width / scroll);
        }

        /**
         * Get information on touch devices
         *
         * @returns {boolean}
         */
        function isTouchDevice() {
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