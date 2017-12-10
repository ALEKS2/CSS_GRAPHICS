"use strict";




window.onload = function() {
   
   var bImg = document.getElementById("bImg");
   var topSlice = document.getElementById("topSlice");
   var rightSlice = document.getElementById("rightSlice");
   var bottomSlice = document.getElementById("bottomSlice");
   var bFill = document.getElementById("bFill");     
   
   var hRepeat = document.getElementById("hRepeat");
   var vRepeat = document.getElementById("vRepeat");
   
   var outcomebox = document.getElementById("outcomebox");
   
   topSlice.onchange = placeLines;
   rightSlice.onchange = placeLines;
   bottomSlice.onchange = placeLines;
   bImg.onchange = placeLines; 
   bFill.onclick = placeLines;     
   document.getElementById("showgrid").onclick = hideShowLines;
   hRepeat.onchange = placeLines;
   vRepeat.onchange = placeLines;
   
   placeLines();
   
   function placeLines() {
      
      hideShowLines();

      var frameImg = document.getElementById("frameImg");
      var framePreview = document.getElementById("framepreview");
      frameImg.src = bImg.value;
      
      var frameWidth = frameImg.width;
      var frameHeight = frameImg.height;
      framePreview.style.width = frameWidth + "px";
      framePreview.style.height = frameHeight + "px";

      var topline = document.getElementById("topline");
      var rightline = document.getElementById("rightline");
      var bottomline = document.getElementById("bottomline");
      var leftline = document.getElementById("leftline");
      
      topline.style.top = topSlice.value + "px";
      rightline.style.right = rightSlice.value + "px";
      bottomline.style.bottom = bottomSlice.value + "px";
      leftline.style.left = rightSlice.value + "px"; 
      
      var fillValue = bFill.checked ? " fill " : "";       
      var hrepeatType = hRepeat[hRepeat.selectedIndex].value;
      var vrepeatType = hRepeat[vRepeat.selectedIndex].value;
      
      
      outcomebox. style.borderImage = "url("+bImg.value+") " + topSlice.value + " " + rightSlice.value + " " + bottomSlice.value + " " +  fillValue + " " + hrepeatType + " " + vrepeatType;
      document.getElementById("imgFile").textContent = bImg.value;
      document.getElementById("topVal").textContent = topSlice.value;
      document.getElementById("rightVal").textContent = rightSlice.value;
      document.getElementById("bottomVal").textContent = bottomSlice.value; 
      document.getElementById("fillVal").textContent = fillValue;       
      document.getElementById("hrepeatVal").textContent = hrepeatType; 
      document.getElementById("vrepeatVal").textContent = vrepeatType;      
      
      
   }
   
   function hideShowLines() {
      if (document.getElementById("showgrid").checked === true) { 
         document.getElementById("topline2").src = "redot.png";
         document.getElementById("rightline2").src = "redot.png";
         document.getElementById("bottomline2").src = "redot.png";
         document.getElementById("leftline2").src = "redot.png";           
      } else { 
         document.getElementById("topline2").src = "nodot.png";
         document.getElementById("rightline2").src = "nodot.png";
         document.getElementById("bottomline2").src = "nodot.png";
         document.getElementById("leftline2").src = "nodot.png";        
      }
   }
};

