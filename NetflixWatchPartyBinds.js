// ==UserScript==
// @name         Netflix Watch Party Binds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hum
// @author       MrCassioMaciel
// @match        https://www.netflix.com/watch/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/SleepyBlackFox/XUserScripts/master/NetflixWatchPartyBinds.js
// @updateURL    https://raw.githubusercontent.com/SleepyBlackFox/XUserScripts/master/NetflixWatchPartyBinds.js
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown',onKeyPressEvent)
    function onKeyPressEvent(ev){
        if(!ev.shiftKey) return
        if(ev.key === 'C'){
            if(!document.getElementById('chat-wrapper') || !document.getElementsByClassName('sizing-wrapper')[0]) return;
            var chatstate = document.getElementById('chat-wrapper').style.display
            if(chatstate==='flex'){
                document.getElementById('chat-wrapper').style.display = 'none'
                document.getElementsByClassName('sizing-wrapper')[0].style.right = '0px'
                document.getElementsByClassName('sizing-wrapper')[0].classList.remove('with-chat')
            }else{
                document.getElementById('chat-wrapper').style.display = 'flex'
                document.getElementsByClassName('sizing-wrapper')[0].style.right = '288px'
                document.getElementsByClassName('sizing-wrapper')[0].classList.add('with-chat')
            }
        }
    }
})();