(function ( $ ) {
  $.fn.tabular = function( csv, options ){
    // set default values of options here
    var settings = $.extend({
      tableClass: "",
      theadClass: "",
      tbodyClass: "",
      trClass: "",
      tdClass: "",
      caption: "", // caption tag goes just inside table tag 
      summary: ""
    }, options);

    return this.each( function()}
      $.get(csv, function(data){
	// this = table element
	// store an array of rows
	var rows = data.split("\n");
	for (var i = 0; i < rows.length; i++){
	  if (i == 0){
	    // assumes that first row is header
	    this.append("<thead><tr></tr></thead><tbody></tbody>");
	  }
	  else{
	    $(this).find("tbody").append("<tr></tr>");
	  }
	  // store entries of a row as an array
	  var entry = row[i].split(",");
	  for (var j = 0; j < entry.length; j++){
	    if (i == 0){
	      $(this).find("thead > tr").append("<td>"+entry[j]+"</td>");
	    }
	    else{
	      $(this).find("tbody > tr:last").append("<td>" + entry[j] + "</td>");
	    }
	  }
	}
      });
    });
  }
}( jQuery ));
