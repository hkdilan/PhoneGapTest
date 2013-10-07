var testing = (function(module){
	module.DoIt = function(result){
		result.prepend(Date() + '<br/>');
	};
	return module;
}(testing || {}));