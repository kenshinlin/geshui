var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TaxParamStore = assign({}, EventEmitter.prototype, {
    params: {
        yuexin:10000,
        lastYearYuexin:10000,
        yanglao:8,
        yiliao:2,
        shiye:1,
        gongjijin:5,
        lastYearBalance:6054 //深圳，上年全市平均收入
    },

    get: function (key) {
        if( key ){
            return this.params[key];
        }
        return this.params;
    },

    set:function(key,value){
        if( typeof key === 'oject' ){
            this.params = key
        }else{
            this.params[key] = value;
        }
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

module.exports = TaxParamStore;