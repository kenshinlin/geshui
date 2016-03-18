var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var TaxParamStore = require('../stores/TaxParamStore');
var TaxStore = require('../stores/TaxStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'UPDATE_TAX_PARAM':
      	TaxParamStore.set(action.key, action.value);
      	TaxParamStore.emitChange();
      	break;
    case 'CAL_RESULT':
    	TaxStore.calculate(action.params);
    	TaxStore.emitChange();
    default:
     	 // no op
  	}
})

module.exports = AppDispatcher;
