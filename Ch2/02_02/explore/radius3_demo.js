"use strict";




window.onload = function() {
   var tl = document.getElementById("tl");
   var tr = document.getElementById("tr");
   var br = document.getElementById("br");  
   var outcomebox = document.getElementById("outcomebox");
   
   tl.onchange = function(e) {
      document.getElementById("tlbox").style.width = 2*e.target.value + "px";
      document.getElementById("tlbox").style.height = 2*e.target.value + "px";
      document.getElementById("tlbox").style.borderRadius = e.target.value + "px";
      outcomebox.style.borderRadius = tl.value + "px " + tr.value + "px " + br.value + "px ";
      document.getElementById("tlr").textContent = tl.value;
      document.getElementById("trr").textContent = tr.value;
      document.getElementById("brr").textContent = br.value;     
   }; 

   tr.onchange = function(e) {
      document.getElementById("trbox").style.width = 2*e.target.value + "px";
      document.getElementById("trbox").style.height = 2*e.target.value + "px";
      document.getElementById("trbox").style.borderRadius = e.target.value + "px";
      document.getElementById("blbox").style.width = 2*e.target.value + "px";
      document.getElementById("blbox").style.height = 2*e.target.value + "px";
      document.getElementById("blbox").style.borderRadius = e.target.value + "px";      
      outcomebox.style.borderRadius = tl.value + "px " + tr.value + "px " + br.value + "px ";
      document.getElementById("tlr").textContent = tl.value;
      document.getElementById("trr").textContent = tr.value;
      document.getElementById("brr").textContent = br.value;       
   }; 

   br.onchange = function(e) {
      document.getElementById("brbox").style.width = 2*e.target.value + "px";
      document.getElementById("brbox").style.height = 2*e.target.value + "px";
      document.getElementById("brbox").style.borderRadius = e.target.value + "px";
      outcomebox.style.borderRadius = tl.value + "px " + tr.value + "px " + br.value + "px ";
      document.getElementById("tlr").textContent = tl.value;
      document.getElementById("trr").textContent = tr.value;
      document.getElementById("brr").textContent = br.value;      
   }; 
       
      
};

