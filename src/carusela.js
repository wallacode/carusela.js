(function (window) {

    'use strict';

    window['Carusela'] = window['Carusela'] || {};

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
     * @param element
     * @returns {{}}
     */
    window['Carusela'] = function (element) {
        var wrapper         = document.createElement('div'),
            backwardElement = document.createElement('button'),
            forwardElement  = document.createElement('button'),

            /**
             * Get current position fold number
             *
             * @param scroll
             * @param width
             * @returns {number}
             */
            getCurrentFold = function(scroll, width) {
                return Math.ceil(width / scroll);
            },

            /**
             * Go x pixels backwards
             *
             * @returns {number}
             */
            backward = function() {
                return wrapper.scrollLeft -= 100;
            },

            /**
             * Go x pixels forward
             *
             * @returns {number}
             */
            forward = function() {
                return wrapper.scrollLeft += 100;
            }
        ;

        wrapper.className           = 'carusela';
        backwardElement.innerText   = 'Backward';
        backwardElement.className   = 'backward';
        forwardElement.innerText    = 'Forward';
        forwardElement.className    = 'forward';

        forwardElement.addEventListener('click', function() {
            return forward();
        });

        backwardElement.addEventListener('click', function() {
            return backward();
        });

        // Add 'virtual' DOM elements
        element.parentNode.replaceChild(wrapper, element);
        wrapper.appendChild(element);

        // Adding buttons
        wrapper.parentNode.appendChild(backwardElement);
        wrapper.parentNode.appendChild(forwardElement);

        return {
            'backward': backward,
            'forward': forward
        };
    };

}(window));