tabular-js
==========

A simple way to turn your CSV into HTML via JS. Oh my!

Included are example files as well as the jQuery library, which tabular-js uses to create your table with less mess. As a jQuery plugin, tabular-js is easy to use and customize.


groovy to go
-----------

tabular-js is simple to set up. 
All you need is a table with a unique id, the csv or tsv file you want to display, and a few configuration settings.
Here, let me show you!
<pre><code>$("#basic").tabular('tables/table.csv');</code></pre>
That's all you need for your most basic table, along with a table element in your HTML! This bit here goes into your JavaScript, preferrably in a function that is called when the document is ready, and then YOU'RE ready to go! *(See index.html)*

gnarly customization
--------------------

A variety of options are available to create a table that's unique and to your taste.
You've just gotta know how to use 'em...
<pre><code>$("#TABLEID").tabular('path/to/your.csv', {options});</code></pre>
The options tabular-js supports are:
* type: "," OR "tab" [default: ","; allows for csv & tsv parsing]
* caption: "text for your table caption" [default: ""]
* tableClass: "CSS class for table" [default: ""]
* theadClass: "CSS class for table header" [default: ""; we assume the first row is the header]
* tbodyClass: "CSS class for table body" [default: ""]
* trClass: "CSS class for table row" [default: ""]
* tdClass: "CSS class for every table entry" [default: ""]
* captionClass: "CSS class for table caption" [default: ""]

Example code to make a fancy table:
<pre><code>$("#fancy").tabular('tables/table.csv',
  {
    caption: "A fancy table",
    theadClass: "fancyHead",
    tbodyClass: "fancyBod",
    tdClass: "fancyTD",
    captionClass: "fancyCaption"
  });</code></pre>
  
radical tables
--------------

Examples of tables made with tabular-js are included.
In the index.html file we've got basic tables, fancy tables, and even outrageous tables!
With tabular-js, you can style your tables as you like as we allow tons of customization with the ability to target each aspect of the table element so you can write your own CSS to get the exact look you want. We split the table into a header and body so you can emphasize the header while giving your table body a unified style.
If you like a look you saw on *index.html*, feel free to take a boo in the *css* folder.

movin' ahead
------------

tabular-js is a work in progress.
Rome wasn't made in a day and neither was tabular-js. In fact, we're always looking ahead for things to add. Ideas still to come to fruition:
* decimal/price handling
* colspan/rowspan
* loading image?
* are there other table features not yet explored?
* more testing!
* more examples!!
