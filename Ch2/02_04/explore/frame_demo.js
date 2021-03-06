"use strict";




window.onload = function() {
   
   var bImg = document.getElementById("bImg");
   var bSlice = document.getElementById("bSlice");
   var bFill = document.getElementById("bFill");
   var hRepeat = document.getElementById("hRepeat");
   var vRepeat = document.getElementById("vRepeat");   
   
   var outcomebox = document.getElementById("outcomebox");
   
   bSlice.onchange = placeLines;  
   bImg.onchange = placeLines; 
   document.getElementById("showgrid").onclick = hideShowLines;
   bFill.onclick = placeLines;
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
      
      topline.style.top = bSlice.value + "px";
      rightline.style.right = bSlice.value + "px";
      bottomline.style.bottom = bSlice.value + "px";
      leftline.style.left = bSlice.value + "px"; 
      
      var fillValue = bFill.checked ? " fill " : "";
      
      var hrepeatType = hRepeat[hRepeat.selectedIndex].value;
      var vrepeatType = hRepeat[vRepeat.selectedIndex].value;      
      
      
      outcomebox. style.borderImage = "url("+bImg.value+") " + bSlice.value + " " + fillValue + " " + hrepeatType + " " + vrepeatType;      
      document.getElementById("imgFile").textContent = bImg.value;
      document.getElementById("sliceVal").textContent = bSlice.value;   
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

