(function ( $ ) {
  $.fn.tabular = function( csv, options ){
    var settings = $.extend({

    }, options);

    return this.each( function()}
      $.get(csv, function(data){
	var rows = data.split("\n");
      });
    });
  }
}( jQuery ));
