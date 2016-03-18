var React = require('react');
var TaxStore = require('../stores/TaxStore');
var TaxResultPanel = require('./TaxResultPanel');


var TaxResultPanelCtrl = React.createClass({
    getInitialState: function () {
        return {
            result: TaxStore.get()
        };
    },

    componentDidMount: function() {
        TaxStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TaxStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            result: TaxStore.get()
        });
    },

    render: function() {
        return <TaxResultPanel
            result = {this.state.result}
        />;
    }
});

module.exports = TaxResultPanelCtrl;
