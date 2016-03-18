var React = require('react');
var TaxParamStore = require('../stores/TaxParamStore');

var TaxAction = require('../actions/TaxAction');
var TaxParamPanel = require('./TaxParamPanel');

var TaxParamPanelCtrl = React.createClass({
    getInitialState: function () {
        return {
            params: TaxParamStore.get(),
            valid:true
        };
    },

    componentDidMount: function() {
        TaxParamStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TaxParamStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            params: TaxParamStore.get()
        });
    },

    handleInputChange: function ( key , event ) {
        var target = event.target;
        var value = target.value;

        TaxAction.updateParam(key,value);
        if( key == "shiye" && isNaN(value) ){
            this.setState('valid', false);
        }
    },

    // 计算结果
    calculateResult: function(){
        TaxAction.calculateResult(this.state.params);
    },

    render: function() {
        return <TaxParamPanel
            params={this.state.params}
            valid={this.state.valid}
            handleInputChange={this.handleInputChange}
            calculateResult={this.calculateResult}
        />;
    }
});

module.exports = TaxParamPanelCtrl;
