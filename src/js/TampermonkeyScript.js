/**
 * Created by editcue on 2015/6/18.
 */
$(function () {
    $.get('https://raw.githubusercontent.com/editcue/TampermonkeyGamerskyAutopager/master/src/autopager.html',
        function (domStr, msg) {
            if (msg === 'success') {
                $(domStr).filter('.html').appendTo('body');
                $(domStr).filter('script').appendTo('body');
            }
        })
})
