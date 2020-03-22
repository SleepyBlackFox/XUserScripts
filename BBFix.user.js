// ==UserScript==
// @name         BBFix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www2.bancobrasil.com.br/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/cassiomaciell/XUserScripts/master/BBFix.user.js
// @updateURL    https://raw.githubusercontent.com/cassiomaciell/XUserScripts/master/BBFix.user.js
// ==/UserScript==

(function() {
    'use strict';
    let fix = document.createElement('script')
    fix.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'
    document.head.appendChild(fix)
})();
