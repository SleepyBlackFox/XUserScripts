// ==UserScript==
// @name         Apelar nas keys
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       CassioMaciel
// @match        https://www.twitch.tv/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/cassiomaciell/XUserScripts/master/ApelarNasKeys.user.js
// @updateURL    https://raw.githubusercontent.com/cassiomaciell/XUserScripts/master/ApelarNasKeys.user.js
// ==/UserScript==

(function () {
    'use strict';
    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    document.addEventListener('click', e => {
        if(e.target.classList.contains('chat-line__message')){
            copyToClipboard(e.target.querySelector('.text-fragment').innerText)
        }else if(e.target.classList.contains('text-fragment')){
            console.log(e.target.innerText)
        }
    })
})();
