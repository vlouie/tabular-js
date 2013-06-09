;(function ( $ ) {
  $.fn.tabular = function( csv, options ){
    var table = this;
    // set default values of options here
    var settings = $.extend({
      type: ",", // default handling is csv
      caption: "", // caption tag goes just inside table tag 
      tableClass: "",
      theadClass: "",
      tbodyClass: "",
      trClass: "",
      tdClass: "",
      captionClass: "",
    }, options);
    
    return this.each( function(){
      var separator = (settings.type == "tab") ? "\t" : ",";
      if (settings.caption.length != 0){
        table.append("<caption>" + settings.caption + "</caption>");
        if (settings.captionClass.length != 0){
          table.find("caption").addClass(settings.captionClass);
        }
      }
      $.get(csv, function(data){
        // this = table element
        // store an array of rows
        var rows = data.split("\n");
        for (var i = 0; i < rows.length-1; i++){
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
        // add classes to table as per options
        table.addClass(settings.tableClass);
        table.find("thead").addClass(settings.theadClass);
        table.find("thead > tr").addClass(settings.trClass);
        table.find("tbody").addClass(settings.tbodyClass);
        table.find("thead > tr > td").addClass(settings.tdClass);
        table.find("tbody > tr > td").addClass(settings.tdClass);
      });
    });
  }
})( jQuery );
