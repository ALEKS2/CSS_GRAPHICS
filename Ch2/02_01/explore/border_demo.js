"use strict";




window.onload = function() {
   document.getElementById("borderW").onchange = function(e) {
      document.getElementById("outcomebox").style.borderWidth = e.target.value+"px";
      document.getElementById("bWidth").textContent = e.target.value + "px";
   };
   
   document.getElementById("borderC").onchange = function(e) {
      document.getElementById("outcomebox").style.borderColor = e.target.value;
      document.getElementById("bColor").textContent = document.getElementById("outcomebox").style.borderColor;
   }; 
   
   document.getElementById("borderS").onchange = function(e) {
      var sIndex = document.getElementById("borderS").selectedIndex;
      document.getElementById("outcomebox").style.borderStyle = document.getElementById("borderS").options[sIndex].value;
      document.getElementById("bStyle").textContent = document.getElementById("borderS").options[sIndex].value;
   };     
      
};

