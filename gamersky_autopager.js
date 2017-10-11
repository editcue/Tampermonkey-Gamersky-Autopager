/**
 * Created by editcue on 2015/6/18.
 */
// ==UserScript==
// @name         Gamersky Autopager
// @namespace    https://github.com/editcue/Tampermonkey-Gamersky-Autopager
// @version      0.4
// @description  游民星空加载下一页插件
// @author       editcue@gmail.com
// @match        http://www.gamersky.com/ent/*/*.shtml
// @match       http://www.gamersky.com/news/*/*.shtml
// @match       http://www.gamersky.com/wenku/*/*.shtml
// @grant        none
// @require 	 http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==
window.$ = jQuery.noConflict(true);
$(function () {
    $.get('https://raw.githubusercontent.com/editcue/Tampermonkey-Gamersky-Autopager/master/gamersky_autopager.html',
        function (domStr, msg) {
            if (msg === 'success') {
                $(domStr).filter('.html').appendTo('body');
                $(domStr).filter('script').appendTo('body');
            }
        })
})
