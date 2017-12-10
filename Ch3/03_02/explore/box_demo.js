"use strict";




window.onload = function() {

   var bgColor = document.getElementById("bgColor");
   var bgAlpha = document.getElementById("bgAlpha");   
   var outcomebox = document.getElementById("outcomebox");
   
  
   
   bgColor.onchange = function() {
      outcomebox.style.backgroundColor = hexToRGB(bgColor.value, bgAlpha.value);
     document.getElementById("cVal").textContent = hexToRGB(bgColor.value, bgAlpha.value)+";";      
   };
   bgAlpha.onchange = function() {
      outcomebox.style.backgroundColor = hexToRGB(bgColor.value, bgAlpha.value);
     document.getElementById("cVal").textContent = hexToRGB(bgColor.value, bgAlpha.value)+";";      
   };   
   
   var shadowOptions = document.getElementsByClassName("shadowOption");
   shadowOptions[0].children[1].onchange = applyTextShadows;
   shadowOptions[0].children[3].onchange = applyTextShadows;   
   shadowOptions[0].children[6].onchange = applyTextShadows;
   shadowOptions[0].children[9].onchange = applyTextShadows;
   shadowOptions[0].children[12].onchange = applyTextShadows;
   shadowOptions[0].children[15].onchange = applyTextShadows;   
   shadowOptions[0].children[18].onclick = applyTextShadows;   
   shadowOptions[0].children[20].onclick = removeTextShadow;

   document.getElementById("addShadow").onclick = function() {
      var newOption = shadowOptions[0].cloneNode(true);
      newOption.children[1].onchange = applyTextShadows;
      newOption.children[3].onchange = applyTextShadows;
      newOption.children[6].onchange = applyTextShadows;      
      newOption.children[9].onchange = applyTextShadows;
      newOption.children[12].onchange = applyTextShadows;
      newOption.children[15].onchange = applyTextShadows;      
      newOption.children[18].onclick = applyTextShadows;   
      newOption.children[20].onclick = removeTextShadow;      
      shadowOptions[0].parentElement.insertBefore(newOption, shadowOptions[0].parentElement.lastElementChild);
   };
   
   function applyTextShadows() {
      var shadowString = "";
      var shadowString2 = "";
      for (var i = 0; i < shadowOptions.length; i++) {
         shadowString += hexToRGB(shadowOptions[i].children[1].value, shadowOptions[i].children[3].value) + " ";
         shadowString += shadowOptions[i].children[6].value + "px "; 
         shadowString += shadowOptions[i].children[9].value + "px ";
         shadowString += shadowOptions[i].children[12].value + "px "; 
         if (shadowOptions[i].children[15].value !== "0") {
            shadowString += shadowOptions[i].children[15].value + "px ";
         } else {
            shadowString += "";
         }         
         if (shadowOptions[i].children[18].checked) {
            shadowString += "inset ";
         } else {
            shadowString += "";
         }
         
         shadowString2 += hexToRGB(shadowOptions[i].children[1].value, shadowOptions[i].children[3].value) + " ";
         shadowString2 += shadowOptions[i].children[6].value + "px "; 
         shadowString2 += shadowOptions[i].children[9].value + "px ";
         shadowString2 += shadowOptions[i].children[12].value + "px ";
         if (shadowOptions[i].children[15].value !== "0") {
            shadowString2 += shadowOptions[i].children[15].value + "px ";
         } else {
            shadowString2 += "";
         }           
         if (shadowOptions[i].children[18].checked) {
            shadowString2 += "inset ";
         } else {
            shadowString2 += "";
         }         
         
         if (i !== shadowOptions.length - 1) {
            shadowString += ", ";
            shadowString2 += ", <br />";
         }    
      }

      document.getElementById("outcomebox").style.boxShadow = shadowString;
      document.getElementById("shadowVal").innerHTML = shadowString2 + ";";
      
   }
   
   function removeTextShadow(e) {
      var deadOption = e.target.parentElement;
      shadowOptions[0].parentNode.removeChild(deadOption);
      applyTextShadows();
   }
   
   function hexToRGB(hexc, alpha){
    var h = "0123456789ABCDEF";
    var hex = hexc.toUpperCase();
    var r = h.indexOf(hex[1])*16+h.indexOf(hex[2]);
    var g = h.indexOf(hex[3])*16+h.indexOf(hex[4]);
    var b = h.indexOf(hex[5])*16+h.indexOf(hex[6]);
    if (alpha==="1") {
      return "rgb("+r+", "+g+", "+b+")";
    } else {
      return "rgba("+r+", "+g+", "+b+","+alpha+")"; 
    }
   }   
};