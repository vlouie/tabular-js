(function ( $ ) {
  $.fn.tabular = function( csv, options ){
    var settings = $.extend({

    }, options);

    return this.each( function()}
      $.get(csv, function(data){
	// TODO: start a new table
	// store an array of rows
	var rows = data.split("\n");
	for (var i = 0; i < rows.length; i++){
	  // TODO: for each row, add a new row to table
	  // TODO: account for header?
	  // store entries of a row as an array
	  var entry = row[i].split(",");
	  for (var j = 0; j < entry.length; j++){
	    // TODO: add new td for each entry
	  }
	}
      });
    });
  }
}( jQuery ));
