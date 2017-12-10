"use strict";




window.onload = function() {
   
   var outcomebox = document.getElementById("outcomebox");
   var outcomecode = document.getElementById("outcomecode"); 
   var innerBox = document.getElementById("innerbox");
   var useColor = document.getElementById("useColor"); 
   var bgColor = document.getElementById("bgColor"); 
   var colorAlpha = document.getElementById("colorAlpha");    
   var showBack = document.getElementById("showBack");
   var repeatBox= document.getElementById("repeat"); 
   var originBox= document.getElementById("origin"); 
   var clipBox = document.getElementById("clip"); 
   var attachBox = document.getElementById("attach");    
   var posKey = document.getElementById("posKey");  
   var posP = document.getElementById("posP");
   var vPos = document.getElementById("vPos");
   var hPos = document.getElementById("hPos");   
   var hKey = document.getElementById("hKey"); 
   var vKey = document.getElementById("vKey"); 
   var sizeKey = document.getElementById("sizeKey");  
   var sizeKeyVal = document.getElementById("sizeKeyVal");
   var sizeP = document.getElementById("sizeP");
   var hSize = document.getElementById("hSize");   
   var vSize = document.getElementById("vSize");   
   var cb = document.getElementById("cb"); 
   var pb = document.getElementById("pb"); 
   var bb = document.getElementById("bb");    
   
   
   
   showBack.onclick = applyBackground;
   useColor.onclick = applyBackground;
   bgColor.onchange = applyBackground;
   colorAlpha.onchange = applyBackground;
   repeatBox.onchange = applyBackground;
   originBox.onchange = applyBackground;
   clipBox.onchange = applyBackground;
   attachBox.onchange = applyBackground;  
   posKey.onclick = applyBackground;
   posP.onclick = applyBackground;  
   hKey.onchange = applyBackground;   
   vKey.onchange = applyBackground;
   hPos.onchange = applyBackground;   
   vPos.onchange = applyBackground; 
   sizeKey.onclick = applyBackground;
   sizeP.onclick = applyBackground;  
   sizeKeyVal.onchange = applyBackground;   
   hSize.onchange = applyBackground;
   vSize.onchange = applyBackground;      
   
   function applyBackground(e) {
      if ((e.target.id === "bgColor") || (e.target.id === "colorAlpha")) {
         showBack.checked = true;
         useColor.checked = true;
      }
      
      if (showBack.checked === true) {
         cb.style.visibility = "hidden";
         pb.style.visibility = "hidden";
         bb.style.visibility = "hidden";
         
         var backImgStr = "";
         if (useColor.checked === true) {
            backImgStr += hexToRGB(bgColor.value, colorAlpha.value) + " ";
            innerBox.style.backgroundColor = "transparent";
         }
         
         backImgStr += "url(penguin.png) ";

         var posFlag = false;
         if (e.target.id === "hKey" || e.target.id === "vKey") {
            posKey.checked = true;   
         }
         
         if (e.target.id === "hPos" || e.target.id === "vPos") {
            posP.checked = true;
         }
         
         if (posKey.checked) {
            if ((hKey.selectedIndex !== 0) || (vKey.selectedIndex !== 0)) {
               var hKeyVal = hKey.options[hKey.selectedIndex].value;
               var vKeyVal = vKey.options[vKey.selectedIndex].value;
               posFlag = true;
               backImgStr += hKeyVal + " " + vKeyVal + " ";
            }
         } else {
            if ((hPos.value !== "0") || (vPos.value !== "0")) {
               var hPosVal = (hPos.value !== "0") ? hPos.value + "%" : "";
               var vPosVal = (vPos.value !== "0") ? vPos.value + "%" : "";
               posFlag = true;
               backImgStr += hPosVal + " " + vPosVal + " ";               
            }            
         }   
         
         var posFlagValue = (posFlag === true) ? "" : "0% 0% ";         
         if (e.target.id === "sizeKeyVal") {
            sizeKey.checked = true;   
         }
         
         if (e.target.id === "hSize" || e.target.id === "vSize") {
            sizeP.checked = true;
         }
         
         if (sizeKey.checked) {
            if (sizeKeyVal.selectedIndex !== 0) {
               var sizeVal = sizeKeyVal.options[sizeKeyVal.selectedIndex].value;
               backImgStr +=  posFlagValue + "/" + sizeVal + " ";
            }
         } else {
            if ((hSize.value !== "0") || (vSize.value !== "0")) {
               var hSizeVal = (hSize.value !== "0") ? hSize.value + "px" : "";
               var vSizeVal = (vSize.value !== "0") ? vSize.value + "px" : "";
               backImgStr += posFlagValue + "/" + hSizeVal + " " + vSizeVal + " ";               
            }
         }
         
         if (repeatBox.selectedIndex !== 0) {
            var repeatValue = repeatBox.options[repeatBox.selectedIndex].value;
            backImgStr += repeatValue + " ";
         }    
         
         if (attachBox.selectedIndex !== 0) {
            var attachValue = attachBox.options[attachBox.selectedIndex].value;
            backImgStr += attachValue + " ";
         }    

         if (originBox.selectedIndex !== 0) {
            var originValue = originBox.options[originBox.selectedIndex].value;
            backImgStr += originValue + " ";
         }          
         
         if (clipBox.selectedIndex !== 0) {
            var clipValue = clipBox.options[clipBox.selectedIndex].value;
            backImgStr += clipValue;
         }
         
         outcomebox.style.background = backImgStr;
         outcomecode.textContent = "background: " + backImgStr + ";";
     
         
      } else {
         cb.style.visibility = "visible";
         pb.style.visibility = "visible";
         bb.style.visibility = "visible";        
         innerBox.style.backgroundColor = "hsla(119,84%,48%,0.3)";         
         outcomebox.style.background = "";  
         outcomecode.innerHTML = "";
      }
      

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