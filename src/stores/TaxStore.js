var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TaxStore = assign({}, EventEmitter.prototype, {
    reslut: {
        shiye:0,
        yiliao:0,
        yanglao:0,
        gongjijin:0,
        nashuie:0,
        jiaoshuie: 0,
        shishou:0,
        shishougongjijin:0
    },

    get: function (key) {
        if( key ){
            return this.reslut[key];
        }
        return this.result;
    },

    set:function(key,value){
        if( typeof key === 'oject' ){
            this.result = key
        }else{
            this.result[key] = value;
        }
    },

    selectRate: function (yuexin) {
        var gap =  yuexin - 3500;
        if( gap < 0 ){
            return 0;
        }

        if( gap <= 1500 ){
            return {
                rate:3,
                base:0
            };
        }else if( gap <= 4500 ){
            return {
                rate: 10,
                base: 105
            };
        }else if( gap <= 9000 ){
            return {
                rate: 20,
                base:555
            };
        }else if( gap <= 35000 ){
            return {
                rate: 25,
                base: 1005 
            }
        }else if( gap<= 55000){
            return {
                rate: 30,
                base: 2775
            }
        }else if( gap <= 80000){
            return {
                rate: 35,
                base:5505
            }
        }else if( gap > 80000 ){
            return {
                rate: 45,
                base: 13505
            }
        }
    },
    /**
     * 计算结果
     */
    calculate:function(params){
        console.log('params', params);

        var rate = this.selectRate(params.yuexin);
        var lastYearYuexin = params.lastYearYuexin||params.yuexin;

        // 基数计算各地方有差异
        var shebaoBase = params.yuexin>(params.lastYearBalance*3)?(params.lastYearBalance*3):params.yuexin; //有上下限，60%-300%当地平均收入
        var gongjijinBase = lastYearYuexin>(params.lastYearBalance*5)?(params.lastYearBalance*5):lastYearYuexin; //有上下限

        shebaoBase = shebaoBase<(params.lastYearBalance*0.6)?(params.lastYearBalance*0.6):shebaoBase;

        var result = {
            yanglao: Math.floor(shebaoBase * params.yanglao)/100,
            yiliao: Math.floor(shebaoBase * params.yiliao)/100,
            shiye: Math.floor(shebaoBase * params.shiye)/100,
            gongjijin: Math.floor(gongjijinBase * params.gongjijin)/100
        };

        // 社保扣款
        var shebao = result.yanglao + result.yiliao + result.shiye + result.gongjijin;

        // 纳税额
        result.nashuie = params.yuexin - shebao - 3500;

        // 应缴个税
        result.jiaoshuie = Math.floor(result.nashuie*rate.rate)/100 - rate.base;

        // 实收
        result.shishou = params.yuexin - result.jiaoshuie - shebao;

        result.shebao = shebao;

        this.result = result;
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

module.exports = TaxStore;