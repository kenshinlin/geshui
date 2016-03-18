var $ = require('jquery');
var utils = {
	fillString: function (tpl, data) {
        $.each(data, function(k, val) {
            var r = new RegExp('{' + k.toUpperCase() + '}', 'g');
            tpl = tpl.replace(r, val);
        });
        return tpl;
    },
    clipString: function(str, len, suffix){
        len = len || 6;
        str = str || '';
        if (str.length > len) {
            str = str.substring(0, len) + suffix||(len>10?'..':'...');
        }
        return str;
    },

    timeformat:function(t){
        var d = new Date(t);

        var month = d.getMonth() + 1;
        var date = d.getDate();
        var hour =d.getHours();
        var minute = d.getMinutes();


        return [
            d.getFullYear(),
            month<10?('0'+month):month,
            date<10?('0'+date):date
        ].join('-') + ' ' + [
            hour<10?('0'+hour):hour,
            minute<10?('0'+minute):minute
        ].join(':');
    },
    hashMng:function () {
        var hash = window.location.search.replace('?', '');
        var hashes = hash.split('&');
        var map = {};

        if (hashes.length > 0) {
            $.each(hashes, function(idx, val) {
                var temp = val.split('=');
                if (temp.length == 2) {
                    map[temp[0]] = temp[1];
                }
            });
        }
        return map;
    }
}
module.exports = utils;
