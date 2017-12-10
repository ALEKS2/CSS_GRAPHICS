"use strict";




window.onload = function() {
   
   var outcomebox = document.getElementById("outcomebox");
   var outcomecode = document.getElementById("outcomecode");   
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
      if (showBack.checked === true) {
         cb.style.visibility = "hidden";
         pb.style.visibility = "hidden";
         bb.style.visibility = "hidden";         
         
         var backImgStr = "<span class='codeName'>background-image: </span><span class='codeValue'>url(penguin.png);</span>";
         outcomebox.style.backgroundImage = "url(penguin.png)";
         outcomecode.innerHTML = backImgStr;
         
         
         if (clipBox.selectedIndex !== 0) {
            var clipValue = clipBox.options[clipBox.selectedIndex].value;
            var clipString = "<br /><span class='codeName'>background-clip: </span><span class='codeValue'>"+ clipValue + ";</span>";
            outcomebox.style.backgroundClip = clipValue;
            outcomecode.innerHTML += clipString;
         } else {
            outcomebox.style.backgroundClip = "";
         }         
         
         if (repeatBox.selectedIndex !== 0) {
            var repeatValue = repeatBox.options[repeatBox.selectedIndex].value;
            var repeatString = "<br /><span class='codeName'>background-repeat: </span><span class='codeValue'>"+ repeatValue + ";</span>";
            outcomebox.style.backgroundRepeat = repeatValue;
            outcomecode.innerHTML += repeatString;
         } else {
            outcomebox.style.backgroundRepeat = "";
         }
         
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
               var posString = "<br /><span class='codeName'>background-position: </span><span class='codeValue'>"+ hKeyVal + " " + vKeyVal + ";</span>";
               outcomebox.style.backgroundPosition = hKeyVal + " " + vKeyVal;
               outcomecode.innerHTML += posString;
            } else {
               outcomebox.style.backgroundPosition = ""; 
            }
         } else {
            if ((hPos.value !== "0") || (vPos.value !== "0")) {
               var hPosVal = (hPos.value !== "0") ? hPos.value + "%" : "";
               var vPosVal = (vPos.value !== "0") ? vPos.value + "%" : "";
               var posString2 = "<br /><span class='codeName'>background-position: </span><span class='codeValue'>"+ hPosVal + " " + vPosVal + ";</span>";
               outcomebox.style.backgroundPosition = hPosVal + " " + vPosVal;
               outcomecode.innerHTML += posString2;               
            } else {
               outcomebox.style.backgroundPosition = ""; 
            }
            
         }
         
         if (originBox.selectedIndex !== 0) {
            var originValue = originBox.options[originBox.selectedIndex].value;
            var originString = "<br /><span class='codeName'>background-origin: </span><span class='codeValue'>"+ originValue + ";</span>";
            outcomebox.style.backgroundOrigin = originValue;
            outcomecode.innerHTML += originString;
         } else {
            outcomebox.style.backgroundOrigin = "";
         }         
         
         if (e.target.id === "sizeKeyVal") {
            sizeKey.checked = true;   
         }
         
         if (e.target.id === "hSize" || e.target.id === "vSize") {
            sizeP.checked = true;
         }
         
         if (sizeKey.checked) {
            if (sizeKeyVal.selectedIndex !== 0) {
               var sizeVal = sizeKeyVal.options[sizeKeyVal.selectedIndex].value;
               var sizeString = "<br /><span class='codeName'>background-size: </span><span class='codeValue'>"+ sizeVal + ";</span>";
               outcomebox.style.backgroundSize = sizeVal;
               outcomecode.innerHTML += sizeString;
            } else {
               outcomebox.style.backgroundSize = "";
            }
         } else {
            if ((hSize.value !== "0") || (vSize.value !== "0")) {
               var hSizeVal = (hSize.value !== "0") ? hSize.value + "px" : "";
               var vSizeVal = (vSize.value !== "0") ? vSize.value + "px" : "";
               var sizeString2 = "<br /><span class='codeName'>background-position: </span><span class='codeValue'>"+ hSizeVal + " " + vSizeVal + ";</span>";
               outcomebox.style.backgroundSize = hSizeVal + " " + vSizeVal;
               outcomecode.innerHTML += sizeString2;               
            } else {
               outcomebox.style.backgroundSize = "";
            }
            
         }         
         
         if (attachBox.selectedIndex !== 0) {
            var attachValue = attachBox.options[attachBox.selectedIndex].value;
            var attachString = "<br /><span class='codeName'>background-attachment: </span><span class='codeValue'>"+ attachValue + ";</span>";
            outcomebox.style.backgroundAttachment = attachValue;
            outcomecode.innerHTML += attachString;
         }  else {
            outcomebox.style.backgroundAttachment = "";
         }       
         
      } else {
         cb.style.visibility = "visible";
         pb.style.visibility = "visible";
         bb.style.visibility = "visible";          
         outcomebox.style.backgroundImage = "";
         outcomebox.style.backgroundRepeat = "";
         outcomebox.style.backgroundPosition = "";
         outcomebox.style.backgroundSize = "";
         outcomebox.style.backgroundOrigin = "";
         outcomebox.style.backgroundClip = "";         
         outcomebox.style.backgroundAttachment = "";  
         outcomecode.innerHTML = "";
      }
      

   }

};