"use strict";




window.onload = function() {
   var tlhrad = document.getElementById("tlhrad"); 
   var tlvrad = document.getElementById("tlvrad"); 
   var trhrad = document.getElementById("trhrad"); 
   var trvrad = document.getElementById("trvrad"); 
   var brhrad = document.getElementById("brhrad"); 
   var brvrad = document.getElementById("brvrad"); 
   
   var outcomebox = document.getElementById("outcomebox");
   
   tlhrad.onchange = update;
   tlvrad.onchange = update;   
   trhrad.onchange = update;
   trvrad.onchange = update; 
   brhrad.onchange = update;
   brvrad.onchange = update;     

   
   function update() {
      document.getElementById("tlbox").style.width = 2*tlhrad.value + "px";
      document.getElementById("tlbox").style.height = 2*tlvrad.value + "px";
      document.getElementById("tlbox").style.borderRadius = tlhrad.value + "px/"+tlvrad.value+"px";
      document.getElementById("trbox").style.width = 2*trhrad.value + "px";
      document.getElementById("trbox").style.height = 2*trvrad.value + "px";
      document.getElementById("trbox").style.borderRadius = trhrad.value + "px/"+trvrad.value+"px";
      document.getElementById("brbox").style.width = 2*brhrad.value + "px";
      document.getElementById("brbox").style.height = 2*brvrad.value + "px";
      document.getElementById("brbox").style.borderRadius = brhrad.value + "px/"+brvrad.value+"px";
      document.getElementById("blbox").style.width = 2*trhrad.value + "px";
      document.getElementById("blbox").style.height = 2*trvrad.value + "px";
      document.getElementById("blbox").style.borderRadius = trhrad.value + "px/"+trvrad.value+"px";      
      
      
      outcomebox.style.borderRadius = tlhrad.value + "px " + trhrad.value + "px " + brhrad.value + "px / " +  tlvrad.value + "px " + trvrad.value + "px " + brvrad.value + "px ";
      document.getElementById("tlhradval").textContent = tlhrad.value; 
      document.getElementById("tlvradval").textContent = tlvrad.value; 
      document.getElementById("trhradval").textContent = trhrad.value; 
      document.getElementById("trvradval").textContent = trvrad.value;
      document.getElementById("brhradval").textContent = brhrad.value; 
      document.getElementById("brvradval").textContent = brvrad.value;      
   }  
      
};

