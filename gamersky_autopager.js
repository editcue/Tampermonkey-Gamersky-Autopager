/**
 * Created by editcue on 2015/6/18.
 */
// ==UserScript==
// @name         Gamersky Autopager
// @namespace    https://github.com/editcue/Tampermonkey-Gamersky-Autopager
// @version      0.1
// @description  enter something useful
// @author       editcue@gmail.com
// @match        http://www.gamersky.com/ent/*/*.shtml
// @match       http://www.gamersky.com/news/*/*.shtml
// @grant        none
// @require 	 http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==
$(function () {
    $.get('https://raw.githubusercontent.com/editcue/Tampermonkey-Gamersky-Autopager/master/gamersky_autopager.html',
        function (domStr, msg) {
            if (msg === 'success') {
                $(domStr).filter('.html').appendTo('body');
                $(domStr).filter('script').appendTo('body');
            }
        })
})
