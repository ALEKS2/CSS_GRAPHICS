"use strict";




window.onload = function() {
   var blends = document.getElementsByTagName("input");
   var outcome = document.getElementById("outcomebox");
   for (var i = 0; i < blends.length; i++) {
      blends[i].onclick = function(e) {
         outcome.style.backgroundBlendMode = e.target.value;
         document.getElementById("mode").textContent = e.target.value;
      };
   }
   
};