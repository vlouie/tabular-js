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
This is all you need for your most basic table. It goes into your JavaScript, preferrably in a function that is called when the document is ready. *(See index.html)*

gnarly customization
--------------------

A variety of options are available to create a table that's unique and to your taste.
You've just gotta know how to use 'em...
<pre><code>$("#basic").tabular('tables/table.csv');</code></pre>

radical tables
--------------

Examples of tables made with tabular-js are included.
In the index.html file we've got basic tables, fancy tables, and even outrageous tables!
With tabular-js, you can style your tables as you like as we allow tons of customization with the ability to target each aspect of the table element so you can write your own CSS to get the exact look you want.
If you like a look you saw on *index.html*, feel free to take a boo in the *css* folder.
