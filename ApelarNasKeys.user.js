// ==UserScript==
// @name         Apelar nas keys
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  hm
// @author       CassioMaciel
// @match        https://www.twitch.tv/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/cassiomaciell/XUserScripts/master/ApelarNasKeys.user.js
// @updateURL    https://raw.githubusercontent.com/cassiomaciell/XUserScripts/master/ApelarNasKeys.user.js
// ==/UserScript==

(function () {
    'use strict';

    window.apelarKey = false

    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    document.addEventListener('click', e => {
        if(!window.apelarKey) return
        if (e.target.classList.contains('chat-line__message')) {
            copyToClipboard(e.target.querySelector('.text-fragment').innerText)
        } else if (e.target.classList.contains('text-fragment')) {
            copyToClipboard(e.target.querySelector('.text-fragment').innerText)
        }
    })

    document.querySelector('.chat-list__list-container').addEventListener('DOMNodeInserted', e => {
        if (!e.srcElement || !e.srcElement.classList.contains('chat-line__message') || !window.apelarKey) return
        if (!isMod(e.srcElement) && !isVip(e.srcElement) && !isChannelOwner(e.srcElement)) {
            e.srcElement.hidden = 'true'
        }
    })

    function isMod(e) {
        return !!e.querySelector("img[alt='Moderador']")
    }

    function isChannelOwner(e) {
        return !!e.querySelector("img[alt='Emissora']")
    }

    function isVip(e) {
        return !!e.querySelector("img[alt='VIP']")
    }

})();
