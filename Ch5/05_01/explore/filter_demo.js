"use strict";




window.onload = function() {
   
   var outcomebox = document.getElementById("outcomebox");
   var outcomefilt = document.getElementById("outcomefilt");
   var erase = document.getElementById("erase");
   var offsetx = document.getElementById("offsetx");
   var offsety = document.getElementById("offsety");
   var blurShad = document.getElementById("blurShad");
   var colorShad = document.getElementById("colorShad");
   var svg = document.getElementById("svg");

   outcomebox.style.filter = "";
   outcomefilt.textContent = ""; 
   
   var filtBoxes = document.getElementsByClassName("filtBox");
   for (var i=0; i < filtBoxes.length; i++) {
      filtBoxes[i].onchange = applyFilt;
   }
   
   var checkboxes = document.getElementsByClassName("eraseF");
   for (var i=0; i < checkboxes.length; i++) {
      checkboxes[i].onclick = toggleFilter;
   }
   offsetx.onchange = applyFilt;
   offsety.onchange = applyFilt;
   blurShad.onchange = applyFilt;
   colorShad.onchange = applyFilt;
   erase.onclick = function() {
      outcomebox.style.filter = "";
      outcomefilt.textContent = "";
      for (var i=0; i < checkboxes.length; i++) {
         checkboxes[i].checked = false;
      }
      removeSVGCode();
   };
   
   function toggleFilter(e) {
      var filtString, filtValue, filtType, currentFilter, newFilter, startFilt, endFilt, oldOption;      
      if (e.target.checked === true) {
         if (e.target.id === "useSVG") {
            filtValue = svg.options[svg.selectedIndex].value;
            filtType = "url";
            filtString = "url(" + filtValue + ")";
            addSVGCode();
         } else if (e.target.id !== "useShad") {
            filtValue = e.target.nextElementSibling.value; 
            filtType = e.target.previousElementSibling.textContent;
            filtString = filtType + "(" + filtValue + (e.target.nextElementSibling.id === "blur" ? "px":"") + (e.target.nextElementSibling.id === "hue" ? "deg":"") + ")";
         } else {
            filtType = "drop-shadow";
            filtString = "drop-shadow(" + offsetx.value + "px " + offsety.value + "px " + blurShad.value + "px " + hexToRGB(colorShad.value, "1") + ")";
         }

         currentFilter = outcomefilt.textContent;
         
         if (currentFilter === "") {
            outcomebox.style.filter =  filtString;         
            outcomefilt.textContent = "filter: " + filtString + ";";       
         } else {
            currentFilter = currentFilter.substring(8, currentFilter.length-1);
            if (currentFilter.indexOf(filtType) === -1) {
               outcomefilt.textContent = "filter: " + currentFilter + " " + filtString + ";";
               outcomebox.style.filter = currentFilter + " " + filtString;
            } else {
               startFilt = currentFilter.indexOf(filtType);
               if (e.target.id !== "useShad")  {
                  endFilt = currentFilter.indexOf(")", startFilt);
               } else {
                  endFilt = currentFilter.indexOf("))", startFilt)+1;
               }
               oldOption = currentFilter.substring(startFilt, endFilt+1);
               newFilter = currentFilter.replace(oldOption, filtString);
               outcomefilt.textContent = "filter: " + newFilter + ";";
               outcomebox.style.filter = newFilter;
            } 
         }         
      } else {
         filtType = e.target.previousElementSibling.textContent;
         currentFilter = outcomefilt.textContent;
         currentFilter = currentFilter.substring(8, currentFilter.length-1).trim();
         if (currentFilter.indexOf(filtType) !== -1) {
            startFilt = currentFilter.indexOf(filtType);
            if (e.target.id !== "useShad")  {
               endFilt = currentFilter.indexOf(")", startFilt);
            } else {
               endFilt = currentFilter.indexOf("))", startFilt)+1;
            }
            oldOption = currentFilter.substring(startFilt, endFilt+1);
            newFilter = currentFilter.replace(oldOption, "");
            if (newFilter === "") {
               outcomefilt.textContent = "";
            } else {
               outcomefilt.textContent = "filter: " + newFilter + ";";              
            }
            outcomebox.style.filter = newFilter;            
         }
         if (filtType === "url") {removeSVGCode();}
      }
   }
      
   function applyFilt(e) {
      var filtString, filtValue, filtType, currentFilter, newFilter, startFilt, endFilt, oldOption;
      
      if (e.target.id === "svg") {
         filtValue = svg.options[svg.selectedIndex].value;
         filtType = "url";
         filtString = "url(" + filtValue + ")";
         document.getElementById("useSVG").checked = true;
         addSVGCode();
      } else if ((e.target.id !== "offsetx") && (e.target.id !== "offsety") && (e.target.id !== "blurShad") && (e.target.id !== "colorShad")) {
         filtValue = e.target.value; 
         filtType = e.target.previousElementSibling.previousElementSibling.textContent;
         e.target.previousElementSibling.checked = true;
         filtString = filtType + "(" + filtValue + (e.target.id === "blur" ? "px":"") + (e.target.id === "hue" ? "deg":"") + ")";
      } else {
         filtType = "drop-shadow";
         filtString = "drop-shadow(" + offsetx.value + "px " + offsety.value + "px " + blurShad.value + "px " + hexToRGB(colorShad.value, "1") + ")";
         document.getElementById("useShad").checked = true;
      }
      
      currentFilter = outcomefilt.textContent;

      
      if (currentFilter === "") {
         outcomebox.style.filter =  filtString;         
         outcomefilt.textContent = "filter: " + filtString + ";";       
      } else {
         currentFilter = currentFilter.substring(8, currentFilter.length-1);
         if (currentFilter.indexOf(filtType) === -1) {
            outcomefilt.textContent = "filter: " + currentFilter + " " + filtString + ";";
            outcomebox.style.filter = currentFilter + " " + filtString;
         } else {
            startFilt = currentFilter.indexOf(filtType);
            if ((e.target.id !== "offsetx") && (e.target.id !== "offsety") && (e.target.id !== "blurShad") && (e.target.id !== "colorShad"))  {
               endFilt = currentFilter.indexOf(")", startFilt);
            } else {
               endFilt = currentFilter.indexOf("))", startFilt)+1;
            }
            oldOption = currentFilter.substring(startFilt, endFilt+1);
            newFilter = currentFilter.replace(oldOption, filtString);
            outcomefilt.textContent = "filter: " + newFilter + ";";
            outcomebox.style.filter = newFilter;
         }                  
      }

   }
   
   function addSVGCode() {
      var svgID = svg.value.substring(1);
      var svgCode = document.getElementById(svgID).outerHTML;
      document.getElementById("outcomesvg").value = svgCode;
      document.getElementById("outcomesvg").style.visibility = "visible";
   }
   
   function removeSVGCode() {
      document.getElementById("outcomesvg").textContent = "";
      document.getElementById("outcomesvg").style.visibility = "hidden";      
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