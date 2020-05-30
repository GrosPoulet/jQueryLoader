var jQueryScript = document.createElement('script');
jQueryScript.type = 'text/javascript';
jQueryScript.src = 'https://code.jquery.com/jquery-latest.min.js';
jQueryScript.onload = function() { this.remove(); }; // once jQuery has been loaded, <script> element can be removed from DOM
(document.head || document.documentElement).appendChild(jQueryScript);
   