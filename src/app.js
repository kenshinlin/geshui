var React = require('react');
var ReactDOM = require('react-dom');
var TaxParamPanelCtrl = require('./components/TaxParamPanelCtrl');
var TaxResultPanelCtrl = require('./components/TaxResultPanelCtrl');

ReactDOM.render(
	<div>
  		<TaxParamPanelCtrl/>
  		<TaxResultPanelCtrl />
  	</div>,
  	document.querySelector('#page')
);