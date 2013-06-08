;(function ( $ ) {
  $.fn.tabular = function( csv, options ){
    var table = this;
    // set default values of options here
    var settings = $.extend({
      type: ",",
      tableClass: "",
      theadClass: "",
      tbodyClass: "",
      trClass: "",
      tdClass: "",
      caption: "", // caption tag goes just inside table tag 
      summary: ""
    }, options);
    
    return this.each( function(){
      var separator = (settings.type == "tab") "\t" : ",";
      $.get(csv, function(data){
        // this = table element
        // store an array of rows
        var rows = data.split("\n");
        for (var i = 0; i < rows.length; i++){
          if (i == 0){
            // assumes that first row is header
            table.append("<thead><tr></tr></thead><tbody></tbody>");
          }
          else{
            table.find("tbody").append("<tr></tr>");
          }
          // store entries of a row as an array
          var entry = rows[i].split(separator);
          for (var j = 0; j < entry.length; j++){
            if (i == 0){
              table.find("thead > tr").append("<td>"+entry[j]+"</td>");
            }
            else{
              table.find("tbody > tr:last").append("<td>" + entry[j] + "</td>");
            }
          }
        }
      });
    });
  }
})( jQuery );
