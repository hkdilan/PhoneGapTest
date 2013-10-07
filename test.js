var test = (function(module){
	module.DoIt = function(result){
		result.prepend(Date() + '<br/>');
	};
}(test || {}});