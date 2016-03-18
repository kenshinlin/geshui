var $ = require('jquery');
var utils = require('../utils/utils');
require('./dialog.css');

var dialog = {
    create: function (options) {
        var tpl = [
        // '<div class="modal" id="modal-dialog-container" style="display:block;top: {TOP}px;z-index:2999;width:92%;left:4%;-webkit-transition:transform .35s linear;transition:transform .35s linear">',
        // '<div class="modal animated slideInDown" id="modal-dialog-container" style="display:block;top: {TOP}px;z-index:2999;width:92%;left:4%;overflow:hidden;">',
        '<div class="modal animated {ANIMATE}" id="modal-dialog-container" style="display:block;z-index:9999;top:0px;overflow:hidden;">',
            '<div class="modal-dialog" style="top:{TOP}px;">',
                '<div class="modal-content">',
                    '<div class="modal-title">{TITLE}</div>',
                    '<div class="modal-body border-top">',
                        '<div class="_content">{CONTENT}</div>',
                    '</div>',
                    '<div class="modal-footer border-top" style="text-align:center;margin-top:0px;">',
                        '<button type="button" class="modal-no _no" data-dismiss="modal">{NO_LABEL}</button>',
                        '<button type="button" class="modal-ok _ok border-left">{YES_LABEL}</button>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>'
        ].join('');
        var $dialogEl = null;
        var dialog;
        var mask = $('.mask');
        var height = options.height;
        
        if( !options.height ){
            height = $(window).height() - 180;
            height = Math.min(height, 400);
        }

        var transformY = 60 + 20 + height;
        
        var posTransform = {
           
        };

        var posTransformRevert = {
            
        };
        // if( !isIOS() ){
            posTransform = {};
            posTransform = {};
        // }
        var top = -height-20;

        // if( !isIOS() ){
            top = ($(window).height() - height)/2 - 30;
        // }

        var data = {
            // top: -height-20,
            top: top,
            content: options.content,
            animate: options.animate === false? "": "slideInDown",
            title: options.title || '',
            height: height - 53 - 55,
            yes_label: options.yes || '确定',
            no_label: options.no || '关闭'
        };

        // 打开新窗口之前，先移除旧的，解决无法关闭的Bug
        var oldModal = $("#modal-dialog-container");
        if (oldModal) {
            oldModal.remove();
        }

        $dialogEl = $(utils.fillString(tpl, data)).appendTo($('body'));
        $('body').addClass('fixed-no-scroll');

        // $toggleEl.css(pos).removeClass('hidden').slideDown();
        setTimeout(function(){
            $dialogEl.css(posTransform);
        }, 100);

        mask.removeClass('none');

        dialog = {
            unload: function() {
                $dialogEl.css(posTransformRevert);
                $('body').removeClass('fixed-no-scroll');
                $dialogEl.remove();
                
                // $dialogEl.removeClass('slideInDown').addClass('slideOutDown');
                // setTimeout( function(){
                //     $dialogEl.remove();
                // }, 1024);
                mask.addClass('none');
            },
            $el: $dialogEl,
            el: $dialogEl[0]
        };

        $dialogEl.find('._no').click(function() {
            if (typeof options.onNO == 'function') {
                options.onNO({
                    target: this,
                    dialog: dialog
                });
            } else {
                dialog.unload();
            }
        });

        $dialogEl.find('._ok').click(function() {
            options.onYES({
                target: this,
                dialog: dialog
            });
        });

        $dialogEl.find('.close').click(function() {
            dialog.unload();
        });
        typeof options.onLoad == 'function' && options.onLoad(dialog);
        return dialog;
    }
}
module.exports = dialog;