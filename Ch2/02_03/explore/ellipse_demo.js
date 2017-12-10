"use strict";




window.onload = function() {
   var hrad = document.getElementById("hrad"); 
   var vrad = document.getElementById("vrad");    
   var outcomebox = document.getElementById("outcomebox");
   
   hrad.onchange = function(e) {
      document.getElementById("tlbox").style.width = 2*e.target.value + "px";
      document.getElementById("tlbox").style.height = 2*vrad.value + "px";
      document.getElementById("tlbox").style.borderRadius = e.target.value + "px/"+vrad.value+"px";
      document.getElementById("trbox").style.width = 2*e.target.value + "px";
      document.getElementById("trbox").style.height = 2*vrad.value + "px";
      document.getElementById("trbox").style.borderRadius = e.target.value + "px/"+vrad.value+"px";
      document.getElementById("brbox").style.width = 2*e.target.value + "px";
      document.getElementById("brbox").style.height = 2*vrad.value + "px";
      document.getElementById("brbox").style.borderRadius = e.target.value + "px/"+vrad.value+"px";
      document.getElementById("blbox").style.width = 2*e.target.value + "px";
      document.getElementById("blbox").style.height = 2*vrad.value + "px";
      document.getElementById("blbox").style.borderRadius = e.target.value + "px/"+vrad.value+"px";      
      
      outcomebox.style.borderRadius = hrad.value + "px/" + vrad.value + "px";
      document.getElementById("hradval").textContent = hrad.value; 
      document.getElementById("vradval").textContent = vrad.value;       
   };   
   
   vrad.onchange = function(e) {
      document.getElementById("tlbox").style.height = 2*e.target.value + "px";
      document.getElementById("tlbox").style.width = 2*hrad.value + "px";
      document.getElementById("tlbox").style.borderRadius = hrad.value + "px/"+e.target.value+"px"; 
      document.getElementById("trbox").style.height = 2*e.target.value + "px";
      document.getElementById("trbox").style.width = 2*hrad.value + "px";
      document.getElementById("trbox").style.borderRadius = hrad.value + "px/"+e.target.value+"px"; 
      document.getElementById("brbox").style.height = 2*e.target.value + "px";
      document.getElementById("brbox").style.width = 2*hrad.value + "px";
      document.getElementById("brbox").style.borderRadius = hrad.value + "px/"+e.target.value+"px"; 
      document.getElementById("blbox").style.height = 2*e.target.value + "px";
      document.getElementById("blbox").style.width = 2*hrad.value + "px";
      document.getElementById("blbox").style.borderRadius = hrad.value + "px/"+e.target.value+"px";       
      
      outcomebox.style.borderRadius = hrad.value + "px/" + vrad.value + "px";
      document.getElementById("hradval").textContent = hrad.value; 
      document.getElementById("vradval").textContent = vrad.value;       
   };    
      
};

