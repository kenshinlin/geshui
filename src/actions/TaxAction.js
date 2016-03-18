var AppDispatcher = require('../dispatcher/AppDispatcher');

var TaxAction = {

  	updateParam: function (key, value) {
   		AppDispatcher.dispatch({
      		actionType: 'UPDATE_TAX_PARAM',
      		key: key,
      		value:value
    	});
  	},

  	calculateResult: function(params){
  		AppDispatcher.dispatch({
  			actionType: 'CAL_RESULT',
  			params: params
  		});
  	}
};

module.exports = TaxAction;