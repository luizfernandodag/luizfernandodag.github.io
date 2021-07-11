(function($) {
	$.fn.extend({
		toObject: function() {
		    var result = {}
		   
		 $.map(this.serializeArray(), function(i, v) {
				

				result[i.name] = i.value;
				

			});
			return result;
		},
		fromObject: function(obj) {
			$.each(this.find(':input'), function(i,v) {
				var name = $(v).attr('name');
				if (obj[name]) {
				     $(v).val(obj[name]);
				 } else {
					$(v).val('');
				 }
			});
		}
	});
})(jQuery);