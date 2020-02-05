// ==UserScript==
// @name         Foda-se o AD
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       MrCassioMaciel
// @match        https://www.mastercuriosidadesbr.com/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/SleepyBlackFox/XUserScripts/master/FodaseOAD.user.js
// @updateURL    https://raw.githubusercontent.com/SleepyBlackFox/XUserScripts/master/FodaseOAD.user.js
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('keydown', (ev) => {
        if (ev.key == "m") {
        console.log(ev.key)
            window.location.href = document.querySelectorAll('#ver000')[1].href
        }
    })
})();
