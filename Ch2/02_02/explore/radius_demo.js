"use strict";




window.onload = function() {
   var rad = document.getElementById("rad"); 
   var outcomebox = document.getElementById("outcomebox");
   
   rad.onchange = function(e) {
      document.getElementById("tlbox").style.width = 2*e.target.value + "px";
      document.getElementById("tlbox").style.height = 2*e.target.value + "px";
      document.getElementById("tlbox").style.borderRadius = e.target.value + "px";
      document.getElementById("trbox").style.width = 2*e.target.value + "px";
      document.getElementById("trbox").style.height = 2*e.target.value + "px";
      document.getElementById("trbox").style.borderRadius = e.target.value + "px";  
      document.getElementById("brbox").style.width = 2*e.target.value + "px";
      document.getElementById("brbox").style.height = 2*e.target.value + "px";
      document.getElementById("brbox").style.borderRadius = e.target.value + "px";
      document.getElementById("blbox").style.width = 2*e.target.value + "px";
      document.getElementById("blbox").style.height = 2*e.target.value + "px";
      document.getElementById("blbox").style.borderRadius = e.target.value + "px";      
      outcomebox.style.borderRadius = rad.value + "px ";
      document.getElementById("radval").textContent = rad.value;     
   };   
      
};

