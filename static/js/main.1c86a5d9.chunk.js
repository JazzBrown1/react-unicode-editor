(this["webpackJsonpreact-unicode-editor-example"]=this["webpackJsonpreact-unicode-editor-example"]||[]).push([[0],{48:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),i=n.n(o),c=n(8),s=n(61),l=n(62),d=n(63),u=n(30),f=n(31),p=n(41),h=n(40),b=n(32),j=n(15),x=n(33),m=n(19),v=function(e,t,n){console.log("inai called"),e.childNodes[n]?e.insertBefore(t,e.childNodes[n]):function(e,t){e.appendChild(t)}(e,t)},g=function(e,t){var n=window.getSelection();e&&n&&(e.focus(),n.setPosition(e,t))},O={display:"inline-block",userSelect:"all",backgroundColor:"#d8d8d8",borderRadius:"5px",padding:"2px 0"},y=function(e){var t=document.createElement("span");return t.innerText=" "+e.inputText+" ",Object.assign(t.style,O),t.className="JazzsTest",t.contentEditable="false",t.setAttribute("data-label",e.inputText),t.setAttribute("data-code",e.code),t.setAttribute("data-preview",e.previewText),t},N=function(e,t){var n=y(t),r=window.getSelection();r&&"Range"===r.type?console.log("Range is not supported yet"):function(e,t,n){if(t){var r=t.anchorNode;if(r)if(1===r.nodeType)v(r,n,t.anchorOffset),g(r,t.anchorOffset+1);else if(3===r.nodeType){var a=r.parentNode,o=Object(j.a)(a.childNodes).indexOf(r);if(0===t.anchorOffset)v(a,n,o);else if(t.anchorOffset===r.nodeValue.length)v(a,n,o+1),g(a,o+2);else{var i=r.nodeValue||"",c=i.substring(0,t.anchorOffset),s=i.substring(t.anchorOffset);r.nodeValue=c;var l=document.createTextNode(s);v(a,n,o+1),v(a,l,o+2),g(a,o+2)}}}}(0,r,n)},T=function(e,t){var n=t;e.forEach((function(r,a){if("string"===typeof r){if("\n"===r){var o=document.createElement("div");return t.appendChild(o),n=o,void(e[a+1]&&"\n"!==e[a+1]||(o.innerHTML="<br>"))}var i=new Text(r);n.appendChild(i)}else{var c=y(r);n.appendChild(c)}}))},w=function(e){var t,n=[],r=Object(b.a)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;n.push(a)}}catch(o){r.e(o)}finally{r.f()}return n},S={normal:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",bold:"\ud835\udc1a\ud835\udc1b\ud835\udc1c\ud835\udc1d\ud835\udc1e\ud835\udc1f\ud835\udc20\ud835\udc21\ud835\udc22\ud835\udc23\ud835\udc24\ud835\udc25\ud835\udc26\ud835\udc27\ud835\udc28\ud835\udc29\ud835\udc2a\ud835\udc2b\ud835\udc2c\ud835\udc2d\ud835\udc2e\ud835\udc2f\ud835\udc30\ud835\udc31\ud835\udc32\ud835\udc33\ud835\udc00\ud835\udc01\ud835\udc02\ud835\udc03\ud835\udc04\ud835\udc05\ud835\udc06\ud835\udc07\ud835\udc08\ud835\udc09\ud835\udc0a\ud835\udc0b\ud835\udc0c\ud835\udc0d\ud835\udc0e\ud835\udc0f\ud835\udc10\ud835\udc11\ud835\udc12\ud835\udc13\ud835\udc14\ud835\udc15\ud835\udc16\ud835\udc17\ud835\udc18\ud835\udc19\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",italic:"\ud835\udc4e\ud835\udc4f\ud835\udc50\ud835\udc51\ud835\udc52\ud835\udc53\ud835\udc54\u210e\ud835\udc56\ud835\udc57\ud835\udc58\ud835\udc59\ud835\udc5a\ud835\udc5b\ud835\udc5c\ud835\udc5d\ud835\udc5e\ud835\udc5f\ud835\udc60\ud835\udc61\ud835\udc62\ud835\udc63\ud835\udc64\ud835\udc65\ud835\udc66\ud835\udc67\ud835\udc34\ud835\udc35\ud835\udc36\ud835\udc37\ud835\udc38\ud835\udc39\ud835\udc3a\ud835\udc3b\ud835\udc3c\ud835\udc3d\ud835\udc3e\ud835\udc3f\ud835\udc40\ud835\udc41\ud835\udc42\ud835\udc43\ud835\udc44\ud835\udc45\ud835\udc46\ud835\udc47\ud835\udc48\ud835\udc49\ud835\udc4a\ud835\udc4b\ud835\udc4c\ud835\udc4d1234567890",boldItalic:"\ud835\udc82\ud835\udc83\ud835\udc84\ud835\udc85\ud835\udc86\ud835\udc87\ud835\udc88\ud835\udc89\ud835\udc8a\ud835\udc8b\ud835\udc8c\ud835\udc8d\ud835\udc8e\ud835\udc8f\ud835\udc90\ud835\udc91\ud835\udc92\ud835\udc93\ud835\udc94\ud835\udc95\ud835\udc96\ud835\udc97\ud835\udc98\ud835\udc99\ud835\udc9a\ud835\udc9b\ud835\udc68\ud835\udc69\ud835\udc6a\ud835\udc6b\ud835\udc6c\ud835\udc6d\ud835\udc6e\ud835\udc6f\ud835\udc70\ud835\udc71\ud835\udc72\ud835\udc73\ud835\udc74\ud835\udc75\ud835\udc76\ud835\udc77\ud835\udc78\ud835\udc79\ud835\udc7a\ud835\udc7b\ud835\udc7c\ud835\udc7d\ud835\udc7e\ud835\udc7f\ud835\udc80\ud835\udc81\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",sans:"\ud835\uddba\ud835\uddbb\ud835\uddbc\ud835\uddbd\ud835\uddbe\ud835\uddbf\ud835\uddc0\ud835\uddc1\ud835\uddc2\ud835\uddc3\ud835\uddc4\ud835\uddc5\ud835\uddc6\ud835\uddc7\ud835\uddc8\ud835\uddc9\ud835\uddca\ud835\uddcb\ud835\uddcc\ud835\uddcd\ud835\uddce\ud835\uddcf\ud835\uddd0\ud835\uddd1\ud835\uddd2\ud835\uddd3\ud835\udda0\ud835\udda1\ud835\udda2\ud835\udda3\ud835\udda4\ud835\udda5\ud835\udda6\ud835\udda7\ud835\udda8\ud835\udda9\ud835\uddaa\ud835\uddab\ud835\uddac\ud835\uddad\ud835\uddae\ud835\uddaf\ud835\uddb0\ud835\uddb1\ud835\uddb2\ud835\uddb3\ud835\uddb4\ud835\uddb5\ud835\uddb6\ud835\uddb7\ud835\uddb8\ud835\uddb91234567890",sansBold:"\ud835\uddee\ud835\uddef\ud835\uddf0\ud835\uddf1\ud835\uddf2\ud835\uddf3\ud835\uddf4\ud835\uddf5\ud835\uddf6\ud835\uddf7\ud835\uddf8\ud835\uddf9\ud835\uddfa\ud835\uddfb\ud835\uddfc\ud835\uddfd\ud835\uddfe\ud835\uddff\ud835\ude00\ud835\ude01\ud835\ude02\ud835\ude03\ud835\ude04\ud835\ude05\ud835\ude06\ud835\ude07\ud835\uddd4\ud835\uddd5\ud835\uddd6\ud835\uddd7\ud835\uddd8\ud835\uddd9\ud835\uddda\ud835\udddb\ud835\udddc\ud835\udddd\ud835\uddde\ud835\udddf\ud835\udde0\ud835\udde1\ud835\udde2\ud835\udde3\ud835\udde4\ud835\udde5\ud835\udde6\ud835\udde7\ud835\udde8\ud835\udde9\ud835\uddea\ud835\uddeb\ud835\uddec\ud835\udded\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",sansItalic:"\ud835\ude22\ud835\ude23\ud835\ude24\ud835\ude25\ud835\ude26\ud835\ude27\ud835\ude28\ud835\ude29\ud835\ude2a\ud835\ude2b\ud835\ude2c\ud835\ude2d\ud835\ude2e\ud835\ude2f\ud835\ude30\ud835\ude31\ud835\ude32\ud835\ude33\ud835\ude34\ud835\ude35\ud835\ude36\ud835\ude37\ud835\ude38\ud835\ude39\ud835\ude3a\ud835\ude3b\ud835\ude08\ud835\ude09\ud835\ude0a\ud835\ude0b\ud835\ude0c\ud835\ude0d\ud835\ude0e\ud835\ude0f\ud835\ude10\ud835\ude11\ud835\ude12\ud835\ude13\ud835\ude14\ud835\ude15\ud835\ude16\ud835\ude17\ud835\ude18\ud835\ude19\ud835\ude1a\ud835\ude1b\ud835\ude1c\ud835\ude1d\ud835\ude1e\ud835\ude1f\ud835\ude20\ud835\ude211234567890",sansBoldItalic:"\ud835\ude56\ud835\ude57\ud835\ude58\ud835\ude59\ud835\ude5a\ud835\ude5b\ud835\ude5c\ud835\ude5d\ud835\ude5e\ud835\ude5f\ud835\ude60\ud835\ude61\ud835\ude62\ud835\ude63\ud835\ude64\ud835\ude65\ud835\ude66\ud835\ude67\ud835\ude68\ud835\ude69\ud835\ude6a\ud835\ude6b\ud835\ude6c\ud835\ude6d\ud835\ude6e\ud835\ude6f\ud835\ude3c\ud835\ude3d\ud835\ude3e\ud835\ude3f\ud835\ude40\ud835\ude41\ud835\ude42\ud835\ude43\ud835\ude44\ud835\ude45\ud835\ude46\ud835\ude47\ud835\ude48\ud835\ude49\ud835\ude4a\ud835\ude4b\ud835\ude4c\ud835\ude4d\ud835\ude4e\ud835\ude4f\ud835\ude50\ud835\ude51\ud835\ude52\ud835\ude53\ud835\ude54\ud835\ude55\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",script:"\ud835\udcb6\ud835\udcb7\ud835\udcb8\ud835\udcb9\u212f\ud835\udcbb\u210a\ud835\udcbd\ud835\udcbe\ud835\udcbf\ud835\udcc0\ud835\udcc1\ud835\udcc2\ud835\udcc3\u2134\ud835\udcc5\ud835\udcc6\ud835\udcc7\ud835\udcc8\ud835\udcc9\ud835\udcca\ud835\udccb\ud835\udccc\ud835\udccd\ud835\udcce\ud835\udccf\ud835\udc9c\u212c\ud835\udc9e\ud835\udc9f\u2130\u2131\ud835\udca2\u210b\u2110\ud835\udca5\ud835\udca6\u2112\u2133\ud835\udca9\ud835\udcaa\ud835\udcab\ud835\udcac\u211b\ud835\udcae\ud835\udcaf\ud835\udcb0\ud835\udcb1\ud835\udcb2\ud835\udcb3\ud835\udcb4\ud835\udcb51234567890",scriptBold:"\ud835\udcea\ud835\udceb\ud835\udcec\ud835\udced\ud835\udcee\ud835\udcef\ud835\udcf0\ud835\udcf1\ud835\udcf2\ud835\udcf3\ud835\udcf4\ud835\udcf5\ud835\udcf6\ud835\udcf7\ud835\udcf8\ud835\udcf9\ud835\udcfa\ud835\udcfb\ud835\udcfc\ud835\udcfd\ud835\udcfe\ud835\udcff\ud835\udd00\ud835\udd01\ud835\udd02\ud835\udd03\ud835\udcd0\ud835\udcd1\ud835\udcd2\ud835\udcd3\ud835\udcd4\ud835\udcd5\ud835\udcd6\ud835\udcd7\ud835\udcd8\ud835\udcd9\ud835\udcda\ud835\udcdb\ud835\udcdc\ud835\udcdd\ud835\udcde\ud835\udcdf\ud835\udce0\ud835\udce1\ud835\udce2\ud835\udce3\ud835\udce4\ud835\udce5\ud835\udce6\ud835\udce7\ud835\udce8\ud835\udce9\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",fraktur:"\ud835\udd1e\ud835\udd1f\ud835\udd20\ud835\udd21\ud835\udd22\ud835\udd23\ud835\udd24\ud835\udd25\ud835\udd26\ud835\udd27\ud835\udd28\ud835\udd29\ud835\udd2a\ud835\udd2b\ud835\udd2c\ud835\udd2d\ud835\udd2e\ud835\udd2f\ud835\udd30\ud835\udd31\ud835\udd32\ud835\udd33\ud835\udd34\ud835\udd35\ud835\udd36\ud835\udd37\ud835\udd04\ud835\udd05\u212d\ud835\udd07\ud835\udd08\ud835\udd09\ud835\udd0a\u210c\u2111\ud835\udd0d\ud835\udd0e\ud835\udd0f\ud835\udd10\ud835\udd11\ud835\udd12\ud835\udd13\ud835\udd14\u211c\ud835\udd16\ud835\udd17\ud835\udd18\ud835\udd19\ud835\udd1a\ud835\udd1b\ud835\udd1c\u21281234567890",frakturBold:"\ud835\udd86\ud835\udd87\ud835\udd88\ud835\udd89\ud835\udd8a\ud835\udd8b\ud835\udd8c\ud835\udd8d\ud835\udd8e\ud835\udd8f\ud835\udd90\ud835\udd91\ud835\udd92\ud835\udd93\ud835\udd94\ud835\udd95\ud835\udd96\ud835\udd97\ud835\udd98\ud835\udd99\ud835\udd9a\ud835\udd9b\ud835\udd9c\ud835\udd9d\ud835\udd9e\ud835\udd9f\ud835\udd6c\ud835\udd6d\ud835\udd6e\ud835\udd6f\ud835\udd70\ud835\udd71\ud835\udd72\ud835\udd73\ud835\udd74\ud835\udd75\ud835\udd76\ud835\udd77\ud835\udd78\ud835\udd79\ud835\udd7a\ud835\udd7b\ud835\udd7c\ud835\udd7d\ud835\udd7e\ud835\udd7f\ud835\udd80\ud835\udd81\ud835\udd82\ud835\udd83\ud835\udd84\ud835\udd85\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",monospace:"\ud835\ude8a\ud835\ude8b\ud835\ude8c\ud835\ude8d\ud835\ude8e\ud835\ude8f\ud835\ude90\ud835\ude91\ud835\ude92\ud835\ude93\ud835\ude94\ud835\ude95\ud835\ude96\ud835\ude97\ud835\ude98\ud835\ude99\ud835\ude9a\ud835\ude9b\ud835\ude9c\ud835\ude9d\ud835\ude9e\ud835\ude9f\ud835\udea0\ud835\udea1\ud835\udea2\ud835\udea3\ud835\ude70\ud835\ude71\ud835\ude72\ud835\ude73\ud835\ude74\ud835\ude75\ud835\ude76\ud835\ude77\ud835\ude78\ud835\ude79\ud835\ude7a\ud835\ude7b\ud835\ude7c\ud835\ude7d\ud835\ude7e\ud835\ude7f\ud835\ude80\ud835\ude81\ud835\ude82\ud835\ude83\ud835\ude84\ud835\ude85\ud835\ude86\ud835\ude87\ud835\ude88\ud835\ude891234567890",doublestruck:"\ud835\udd52\ud835\udd53\ud835\udd54\ud835\udd55\ud835\udd56\ud835\udd57\ud835\udd58\ud835\udd59\ud835\udd5a\ud835\udd5b\ud835\udd5c\ud835\udd5d\ud835\udd5e\ud835\udd5f\ud835\udd60\ud835\udd61\ud835\udd62\ud835\udd63\ud835\udd64\ud835\udd65\ud835\udd66\ud835\udd67\ud835\udd68\ud835\udd69\ud835\udd6a\ud835\udd6b\ud835\udd38\ud835\udd39\u2102\ud835\udd3b\ud835\udd3c\ud835\udd3d\ud835\udd3e\u210d\ud835\udd40\ud835\udd41\ud835\udd42\ud835\udd43\ud835\udd44\u2115\ud835\udd46\u2119\u211a\u211d\ud835\udd4a\ud835\udd4b\ud835\udd4c\ud835\udd4d\ud835\udd4e\ud835\udd4f\ud835\udd50\u21241234567890",circled:"\u24d0\u24d1\u24d2\u24d3\u24d4\u24d5\u24d6\u24d7\u24d8\u24d9\u24da\u24db\u24dc\u24dd\u24de\u24df\u24e0\u24e1\u24e2\u24e3\u24e4\u24e5\u24e6\u24e7\u24e8\u24e9\u24b6\u24b7\u24b8\u24b9\u24ba\u24bb\u24bc\u24bd\u24be\u24bf\u24c0\u24c1\u24c2\u24c3\u24c4\u24c5\u24c6\u24c7\u24c8\u24c9\u24ca\u24cb\u24cc\u24cd\u24ce\u24cf1234567890",inverseCircled:"abcdefghijklmnopqrstuvwxyz\ud83c\udd50\ud83c\udd51\ud83c\udd52\ud83c\udd53\ud83c\udd54\ud83c\udd55\ud83c\udd56\ud83c\udd57\ud83c\udd58\ud83c\udd59\ud83c\udd5a\ud83c\udd5b\ud83c\udd5c\ud83c\udd5d\ud83c\udd5e\ud83c\udd5f\ud83c\udd60\ud83c\udd61\ud83c\udd62\ud83c\udd63\ud83c\udd64\ud83c\udd65\ud83c\udd66\ud83c\udd67\ud83c\udd68\ud83c\udd691234567890",squared:"abcdefghijklmnopqrstuvwxyz\ud83c\udd30\ud83c\udd31\ud83c\udd32\ud83c\udd33\ud83c\udd34\ud83c\udd35\ud83c\udd36\ud83c\udd37\ud83c\udd38\ud83c\udd39\ud83c\udd3a\ud83c\udd3b\ud83c\udd3c\ud83c\udd3d\ud83c\udd3e\ud83c\udd3f\ud83c\udd40\ud83c\udd41\ud83c\udd42\ud83c\udd43\ud83c\udd44\ud83c\udd45\ud83c\udd46\ud83c\udd47\ud83c\udd48\ud83c\udd491234567890"},C={};Object.keys(S).forEach((function(e){C[e]=w(S[e])}));var k={},A={},R=w(S.normal);Object.values(C).forEach((function(e){e.forEach((function(e,t){k[e]=R[t]}))})),Object.entries(C).forEach((function(e){var t=Object(c.a)(e,2),n=t[0],r=t[1];A[n]={},r.forEach((function(e,t){A[n][R[t]]=e}))}));var D=function(e,t){if(!t||!A[t])throw new Error("Unknown font");if("string"!==typeof e)throw new Error("Text arg must be a string");var n=A[t];return w(e).map((function(e){return n[k[e]]||e})).join("")},M=function(e,t){var n=document.createRange(),r=document.getSelection();if(e.parentNode&&r){var a=Object(j.a)(e.parentNode.childNodes).indexOf(e);n.setStart(e.parentNode,a),n.setEnd(e.parentNode,a+1),r.removeAllRanges(),r.addRange(n),document.execCommand("insertText",!1,t)}},P=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Array.from(t.childNodes).forEach((function(t){n.push(t),t.getAttribute&&t.getAttribute("data-code")||e(t,n)})),n},I=function e(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(n.childNodes&&0!==n.childNodes.length)for(var o=a||n.childNodes.length,i=r;i<o;i++){var c=n.childNodes[i];if(3===c.nodeType)M(c,D(c.data,t));else{if(1===c.nodeType&&c.getAttribute("data-code"))continue;e(t,c,0)}}},E=function(e,t){var n=window.getSelection();if(n&&n.anchorNode&&n.focusNode){var r,a,o=P(e,[e]),i=o.indexOf(n.anchorNode),c=o.indexOf(n.focusNode);if(i>c){var s=c;c=i,i=s,r=n.focusOffset,a=n.anchorOffset}else r=n.anchorOffset,a=n.focusOffset;var l=o[i],d=o[c];if(l&&d)if(l!==d){if(3===l.nodeType){var u=l.data,f=u.substring(0,r),p=D(u.substring(r),t);M(l,f+p)}else I(t,l,r);for(var h=i+1;h<c;h++){var b=o[h];3===b.nodeType&&M(b,D(b.data,t))}if(3===d.nodeType){var j=d.data,x=D(j.substring(0,a),t),m=j.substring(a);M(d,x+m)}else I(t,d,0,a)}else if(3===l.nodeType){var v=D(l.data.substring(r,a),t);document.execCommand("insertText",!1,v)}else I(l,r,a)}};function F(e){return!!e.outerHTML}var B=function e(t,n){Array.from(n.childNodes).forEach((function(n,r){if(F(n))if(1!==n.nodeType||n.getAttribute("data-code")){if(1===n.nodeType){var a=n.getAttribute("data-code"),o=n;o.previousSibling&&function(e){return console.log("called",e),!!F(e)&&(console.log("yes"),console.log("oh",e.outerHTML),e.outerHTML.startsWith("<div>"))}(o.previousSibling)&&t.push("\n"),a&&t.push({code:a,inputText:n.getAttribute("data-label")||"",previewText:n.getAttribute("data-preview")||""})}}else 0!==r&&n.outerHTML.startsWith("<div>")&&t.push("\n"),(n.previousSibling||n.nextSibling)&&n.outerHTML.startsWith("<br>")&&t.push("\n"),e(t,n);else t.push(n.data)}))},L=function(e){if(!e)return[];var t=[];return B(t,e),t},V={border:"1px solid black",borderRadius:5,minHeight:40,padding:15,display:"block",whiteSpace:"pre-wrap",width:"100%"},H=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).throttling=!1,r.shouldUpdate=!1,r.updateState=function(){r.props.throttle?r.throttle():r.props.onChange(L(r.textAreaRef.current))},r.throttle=function(){r.throttling?r.shouldUpdate=!0:(r.props.onChange(L(r.textAreaRef.current)),r.throttling=!0,setTimeout((function(){r.shouldUpdate&&(r.props.onChange(L(r.textAreaRef.current)),r.shouldUpdate=!1),r.throttling=!1}),r.props.throttleInterval))},r.refresh=function(){r.textAreaRef.current&&(r.textAreaRef.current.innerHTML="",T(r.props.startValue,r.textAreaRef.current))},r.handlePaste=function(e){setTimeout((function(){var e=L(r.textAreaRef.current);r.textAreaRef.current.innerHTML="",T(e,r.textAreaRef.current)}),5)},r.props=e,r.textAreaRef=Object(m.createRef)(),r.listener=null,document.execCommand("defaultParagraphSeparator",!1,"div"),r}return Object(f.a)(n,[{key:"componentDidMount",value:function(){T(this.props.startValue,this.textAreaRef.current),this.textAreaRef.current.addEventListener("input",this.updateState,!1)}},{key:"componentWillUnmount",value:function(){this.textAreaRef.current.removeEventListener("input",this.updateState,!1)}},{key:"isFocused",value:function(){var e=document.getSelection();return!!e&&(document.activeElement===this.textAreaRef.current||this.textAreaRef.current.contains(null===e||void 0===e?void 0:e.anchorNode))}},{key:"format",value:function(e){this.textAreaRef.current&&this.isFocused()&&(E(this.textAreaRef.current,e),this.updateState())}},{key:"addVariable",value:function(e){this.textAreaRef.current&&this.isFocused()&&(N(this.textAreaRef.current,e),this.updateState())}},{key:"addText",value:function(e){this.textAreaRef.current&&this.isFocused()&&(document.execCommand("insertText",!1,e),this.updateState())}},{key:"render",value:function(){return Object(x.jsx)("div",{id:"jazzy-ce-area",contentEditable:!this.props.disabled,role:"textbox","aria-label":"textarea",tabIndex:0,onPaste:this.handlePaste,className:this.props.className,style:Object.assign(Object.assign({},V),this.props.textareaStyle),ref:this.textAreaRef},void 0)}}]),n}(m.Component);H.defaultProps={textareaStyle:{},disabled:!1,className:"",throttle:!0,throttleInterval:200};var U=H,z=(n(48),n(34)),K=n(58),q=n(59),W=n(39),J=n(1),G=[["normal"," Normal abc"],["sansBold","Bold (Sans) \ud835\uddee\ud835\uddef\ud835\uddf0"],["sansItalic","Italic (Sans) \ud835\ude22\ud835\ude23\ud835\ude24"],["sansBoldItalic","Bold Italic (Sans) \ud835\ude56\ud835\ude57\ud835\ude58"],["bold","Bold (Serif) \ud835\udc1a\ud835\udc1b\ud835\udc1c"],["italic","Italic (Serif) \ud835\udc4e\ud835\udc4f\ud835\udc50"],["boldItalic","Bold Italic (Serif) \ud835\udc82\ud835\udc83\ud835\udc84"],["script","Script \ud835\udcb6\ud835\udcb7\ud835\udcb8"],["scriptBold","Script Bold \ud835\udcea\ud835\udceb\ud835\udcec"],["fraktur","Fraktur \ud835\udd1e\ud835\udd1f\ud835\udd20"],["frakturBold","Frak Bold \ud835\udd86\ud835\udd87\ud835\udd88"],["monospace","Monospace \ud835\ude8a\ud835\ude8b\ud835\ude8c"],["doublestruck","Double \ud835\udd52\ud835\udd53\ud835\udd54"],["circled","Circled \u24d0\u24d1\u24d2"],["inverseCircled","Circle 2 \ud83c\udd50\ud83c\udd51\ud83c\udd52 (CAPS)"],["squared","Squared \ud83c\udd30\ud83c\udd31\ud83c\udd32 (CAPS)"]],Q=function(e){var t=e.onFormatClick;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("span",{className:"mr-1 text-primary font-weight-light d-none d-lg-inline-block",children:"Format: "}),Object(J.jsx)(z.a,{className:"mr-1",variant:"outline-primary",onClick:function(){t("normal")},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},as:"div",children:"Normal"}),Object(J.jsx)(z.a,{className:"mr-1",variant:"outline-primary",onClick:function(){t("sansBold")},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},as:"div",children:"\ud835\uddd5\ud835\uddfc\ud835\uddf9\ud835\uddf1"}),Object(J.jsx)(z.a,{className:"mr-1",variant:"outline-primary",onClick:function(){t("sansItalic")},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},as:"div",children:"\ud835\ude10\ud835\ude35\ud835\ude22\ud835\ude2d\ud835\ude2a\ud835\ude24"}),Object(J.jsx)(K.a,{onSelect:function(e){t(e)},as:q.a,id:"dropdown-variants-formats",variant:"outline-primary",title:"More...",onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},children:G.map((function(e){var t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(J.jsx)(W.a.Item,{eventKey:n,children:r},"fdd_".concat(n))}))},"formats")]})},X=function(e){var t=e.onVariableClick;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("span",{className:"mr-1 text-secondary font-weight-light pl-1 d-none d-lg-inline-block",children:"Variables: "}),Object(J.jsxs)(K.a,{as:q.a,id:"dropdown-variants-user-vars",variant:"outline-secondary",title:"User",onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},children:[Object(J.jsx)(W.a.Item,{eventKey:"title",onSelect:function(){t({inputText:"Title",code:"<<user.title>>",previewText:"Mr"})},children:"Title"}),Object(J.jsx)(W.a.Item,{eventKey:"first-name",onSelect:function(){t({inputText:"First Name",code:"<<user.firstName>>",previewText:"John"})},children:"First Name"}),Object(J.jsx)(W.a.Item,{eventKey:"last-name",onSelect:function(){t({inputText:"Last Name",code:"<<user.lastName>>",previewText:"Smith"})},children:"Last Name"})]},"user-vars")," ",Object(J.jsxs)(K.a,{as:q.a,id:"dropdown-variants-product-vars",variant:"outline-secondary",title:"Product",onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},children:[Object(J.jsx)(W.a.Item,{eventKey:"product-title",onSelect:function(){t({inputText:"Product Name",code:"<<product.title>>",previewText:"Deluxe Vacuum Cleaner"})},children:"Name"}),Object(J.jsx)(W.a.Item,{eventKey:"product-price",onSelect:function(){t({inputText:"Product Price",code:"<<product.price>>",previewText:"49.99"})},children:"Price"}),Object(J.jsx)(W.a.Item,{eventKey:"product-price",onSelect:function(){t({inputText:"Product Category",code:"<<product.category>>",previewText:"Home & Appliances"})},children:"Category"})]},"product-vars")]})},Y=n(38),Z=n.n(Y),_=function(e){var t=e.insertText;return Object(J.jsxs)(W.a,{alignRight:!0,className:"float-right",children:[Object(J.jsx)(W.a.Toggle,{variant:"outline-warning",id:"emoji-dropdown",onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},children:"\ud83d\ude4a\ud83d\ude00\u2764\ufe0f"}),Object(J.jsx)(W.a.Menu,{children:Object(J.jsx)(Z.a,{onEmojiClick:function(e,n){e.preventDefault(),t(n.emoji)},disableAutoFocus:!0})})]})},$=n(60),ee=function(e){var t=e.heading,n=e.text;return Object(J.jsxs)($.a,{className:"pt-4",style:{whiteSpace:"pre-wrap"},children:[Object(J.jsx)("h4",{children:t}),n]})},te=function(e){var t=e.mounted,n=e.setMounted,r=e.disabled,a=e.setDisabled,o=e.color,i=e.setColor;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(z.a,{className:"mr-1",onClick:function(){n(!t)},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},as:"div",children:t?"Unmount":"Mount"}),Object(J.jsx)(z.a,{className:"mr-1",onClick:function(){i("blue"===o?"white":"blue")},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},as:"div",children:"Change Color"}),Object(J.jsx)(z.a,{className:"mr-1",onClick:function(){a(!r)},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},as:"div",children:r?"Enable":"Disable"})]})},ne=function(e){var t=e.chars;return Object(J.jsxs)(J.Fragment,{children:["Characters:"," ",Object(J.jsx)("span",{style:t.chars>29?{color:"red",fontWeight:"bold"}:{},children:t.chars})," ","- Bytes:"," ",t.bytes]})};var re=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),i=Object(c.a)(o,2),u=i[0],f=i[1],p=Object(r.useState)(""),h=Object(c.a)(p,2),b=h[0],x=h[1],m=Object(r.useState)("white"),v=Object(c.a)(m,2),g=v[0],O=v[1],y=Object(r.useState)(!1),N=Object(c.a)(y,2),T=N[0],w=N[1],S=Object(r.useState)(!0),C=Object(c.a)(S,2),k=C[0],A=C[1],R=Object(r.useState)({chars:0,bytes:0}),D=Object(c.a)(R,2),M=D[0],P=D[1],I=Object(r.useRef)(null);return Object(J.jsxs)(s.a,{className:"p-3",children:[Object(J.jsx)(l.a,{className:"mb-4 border-bottom",children:Object(J.jsx)(d.a,{children:Object(J.jsx)("h1",{className:"h3",children:"react-unicode-editor example"})})}),Object(J.jsx)(l.a,{children:Object(J.jsx)(d.a,{children:Object(J.jsx)(ne,{chars:M})})}),Object(J.jsx)(l.a,{className:"mb-2",children:Object(J.jsx)(d.a,{children:k?Object(J.jsx)(U,{startValue:n,onChange:function(e){a(e),f(e.reduce((function(e,t){return"string"===typeof t?e+t:e+t.previewText}),"")),x(function(e){return e.reduce((function(e,t){return"string"===typeof t?e+t:e+t.code}),"")}(e)),P(e.reduce((function(e,t){return"string"===typeof t?{chars:e.chars+Object(j.a)(t).length,bytes:e.bytes+t.length}:e}),{chars:0,bytes:0}))},ref:I,textareaStyle:{minHeight:100,backgroundColor:T?"grey":g,borderColor:M.chars>29?"red":"grey",outlineColor:M.chars>29?"red":"grey"},disabled:T,throttleInterval:300}):"Not Mounted"})}),Object(J.jsxs)(l.a,{className:"mb-4",children:[Object(J.jsx)(d.a,{xs:8,md:10,children:Object(J.jsxs)(l.a,{children:[Object(J.jsx)(d.a,{className:"mb-2",xs:12,md:7,children:Object(J.jsx)(Q,{onFormatClick:function(e){I.current&&I.current.format(e)}})}),Object(J.jsx)(d.a,{xs:12,md:5,children:Object(J.jsx)(X,{onVariableClick:function(e){I.current&&I.current.addVariable(e)}})})]})}),Object(J.jsx)(d.a,{xs:4,md:2,children:Object(J.jsx)(_,{insertText:function(e){I.current&&I.current.addText(e)}})})]}),Object(J.jsxs)(l.a,{className:"mb-3",children:[Object(J.jsx)(d.a,{sm:12,md:6,children:Object(J.jsx)(ee,{heading:"Preview:",text:u})}),Object(J.jsx)(d.a,{sm:12,md:6,children:Object(J.jsx)(ee,{heading:"Serialized:",text:b})})]}),Object(J.jsx)(l.a,{className:"mb-3",children:Object(J.jsx)(d.a,{children:Object(J.jsx)(te,{mounted:k,setMounted:A,disabled:T,setDisabled:w,color:g,setColor:O})})})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(re,{})}),document.getElementById("root")),ae()}},[[54,1,2]]]);
//# sourceMappingURL=main.1c86a5d9.chunk.js.map