(this["webpackJsonpreact-unicode-editor-example"]=this["webpackJsonpreact-unicode-editor-example"]||[]).push([[0],{45:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(19),i=r.n(a),c=r(7),s=r(58),d=r(59),u=r(60),l=r(39),f=r(37),h=r(30),p=r(38),b=r(16),j=r(29),m=r(1),v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(b.a)(this,e),this.stack=new Array(30).fill(null),this.stack[0]=t,this.offset=0,this.current=0}return Object(j.a)(e,[{key:"clear",value:function(e){this.stack.fill(null),this.stack[0]=e,this.offset=0,this.current=0}},{key:"replace",value:function(e){this.stack[this.current]=e}},{key:"add",value:function(e){if(this.offset===this.current)this.offset=(this.offset+1)%30,this.current=(this.current+1)%30,this.stack[this.current]=e;else{for(var t=(this.current+1)%30,r=(this.offset+1)%30;t!==r;)this.stack[t]=null,t=(t+1)%30;this.current=(this.current+1)%30,this.offset=this.current,this.stack[this.current]=e}}},{key:"allowedForward",value:function(){return this.offset!==this.current}},{key:"forward",value:function(){return this.offset!==this.current&&(this.current=(this.current+1)%30,this.stack[this.current])}},{key:"allowedBack",value:function(){var e=(this.current+29)%30;return!(e===this.offset||null===this.stack[e])}},{key:"back",value:function(){var e=(this.current+29)%30;return e!==this.offset&&null!==this.stack[e]&&(this.current=e,this.stack[this.current])}},{key:"getState",value:function(){return this.stack[this.current]}}]),e}(),O=function(e,t,r){e.childNodes[r]?e.insertBefore(t,e.childNodes[r]):e.appendChild(t)},y=function(e,t){var r=window.getSelection();e&&r&&(e.focus(),r.setPosition(e,t))},g=function(e,t,r){if(t){var n=t.anchorNode;if(n)if(1===n.nodeType)O(n,r,t.anchorOffset),y(n,t.anchorOffset+1);else if(3===n.nodeType){var o=n.parentNode,a=Object(p.a)(o.childNodes).indexOf(n);if(0===t.anchorOffset)O(o,r,a);else if(t.anchorOffset===n.nodeValue.length)O(o,r,a+1),y(o,a+2);else{var i=n.nodeValue||"",c=i.substring(0,t.anchorOffset),s=i.substring(t.anchorOffset);n.nodeValue=c;var d=document.createTextNode(s);O(o,r,a+1),O(o,d,a+2),y(o,a+2)}}}},x={lineHeight:1,display:"inline-block",userSelect:"all",backgroundColor:"#d8d8d8",borderRadius:"5px",padding:"4px 0"},k=function(e,t){var r,n;"string"===typeof e.style?(r=e.style?JSON.parse(e.style):{},n=e.style):"object"===typeof e.style?(r=e.style,n=JSON.stringify(e.style)):(r={},n="");var o=document.createElement("span");return o.innerText=" ".concat(e.inputText," "),Object.assign(o.style,x,t,r),o.className="react-unicode-editor-var ".concat(e.className||""),o.contentEditable="false",o.draggable=!1,o.setAttribute("data-label",e.inputText),o.setAttribute("data-code",e.code),o.setAttribute("data-preview",e.previewText),o.setAttribute("data-classes",e.className||""),o.setAttribute("data-format",e.format||"normal"),o.setAttribute("data-styles",n),o},w=function(e,t,r){var n=t;e.forEach((function(o,a){if("string"===typeof o){if("\n"===o){var i=document.createElement("div");return t.appendChild(i),n=i,void(e[a+1]&&"\n"!==e[a+1]||(i.innerHTML="<br>"))}var c=new Text(o);n.appendChild(c)}else{var s=k(o,r);n.appendChild(s)}}))},S=function(e){var t,r=[],n=Object(h.a)(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;r.push(o)}}catch(a){n.e(a)}finally{n.f()}return r},R={normal:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",bold:"\ud835\udc1a\ud835\udc1b\ud835\udc1c\ud835\udc1d\ud835\udc1e\ud835\udc1f\ud835\udc20\ud835\udc21\ud835\udc22\ud835\udc23\ud835\udc24\ud835\udc25\ud835\udc26\ud835\udc27\ud835\udc28\ud835\udc29\ud835\udc2a\ud835\udc2b\ud835\udc2c\ud835\udc2d\ud835\udc2e\ud835\udc2f\ud835\udc30\ud835\udc31\ud835\udc32\ud835\udc33\ud835\udc00\ud835\udc01\ud835\udc02\ud835\udc03\ud835\udc04\ud835\udc05\ud835\udc06\ud835\udc07\ud835\udc08\ud835\udc09\ud835\udc0a\ud835\udc0b\ud835\udc0c\ud835\udc0d\ud835\udc0e\ud835\udc0f\ud835\udc10\ud835\udc11\ud835\udc12\ud835\udc13\ud835\udc14\ud835\udc15\ud835\udc16\ud835\udc17\ud835\udc18\ud835\udc19\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",italic:"\ud835\udc4e\ud835\udc4f\ud835\udc50\ud835\udc51\ud835\udc52\ud835\udc53\ud835\udc54\u210e\ud835\udc56\ud835\udc57\ud835\udc58\ud835\udc59\ud835\udc5a\ud835\udc5b\ud835\udc5c\ud835\udc5d\ud835\udc5e\ud835\udc5f\ud835\udc60\ud835\udc61\ud835\udc62\ud835\udc63\ud835\udc64\ud835\udc65\ud835\udc66\ud835\udc67\ud835\udc34\ud835\udc35\ud835\udc36\ud835\udc37\ud835\udc38\ud835\udc39\ud835\udc3a\ud835\udc3b\ud835\udc3c\ud835\udc3d\ud835\udc3e\ud835\udc3f\ud835\udc40\ud835\udc41\ud835\udc42\ud835\udc43\ud835\udc44\ud835\udc45\ud835\udc46\ud835\udc47\ud835\udc48\ud835\udc49\ud835\udc4a\ud835\udc4b\ud835\udc4c\ud835\udc4d1234567890",boldItalic:"\ud835\udc82\ud835\udc83\ud835\udc84\ud835\udc85\ud835\udc86\ud835\udc87\ud835\udc88\ud835\udc89\ud835\udc8a\ud835\udc8b\ud835\udc8c\ud835\udc8d\ud835\udc8e\ud835\udc8f\ud835\udc90\ud835\udc91\ud835\udc92\ud835\udc93\ud835\udc94\ud835\udc95\ud835\udc96\ud835\udc97\ud835\udc98\ud835\udc99\ud835\udc9a\ud835\udc9b\ud835\udc68\ud835\udc69\ud835\udc6a\ud835\udc6b\ud835\udc6c\ud835\udc6d\ud835\udc6e\ud835\udc6f\ud835\udc70\ud835\udc71\ud835\udc72\ud835\udc73\ud835\udc74\ud835\udc75\ud835\udc76\ud835\udc77\ud835\udc78\ud835\udc79\ud835\udc7a\ud835\udc7b\ud835\udc7c\ud835\udc7d\ud835\udc7e\ud835\udc7f\ud835\udc80\ud835\udc81\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",sans:"\ud835\uddba\ud835\uddbb\ud835\uddbc\ud835\uddbd\ud835\uddbe\ud835\uddbf\ud835\uddc0\ud835\uddc1\ud835\uddc2\ud835\uddc3\ud835\uddc4\ud835\uddc5\ud835\uddc6\ud835\uddc7\ud835\uddc8\ud835\uddc9\ud835\uddca\ud835\uddcb\ud835\uddcc\ud835\uddcd\ud835\uddce\ud835\uddcf\ud835\uddd0\ud835\uddd1\ud835\uddd2\ud835\uddd3\ud835\udda0\ud835\udda1\ud835\udda2\ud835\udda3\ud835\udda4\ud835\udda5\ud835\udda6\ud835\udda7\ud835\udda8\ud835\udda9\ud835\uddaa\ud835\uddab\ud835\uddac\ud835\uddad\ud835\uddae\ud835\uddaf\ud835\uddb0\ud835\uddb1\ud835\uddb2\ud835\uddb3\ud835\uddb4\ud835\uddb5\ud835\uddb6\ud835\uddb7\ud835\uddb8\ud835\uddb91234567890",sansBold:"\ud835\uddee\ud835\uddef\ud835\uddf0\ud835\uddf1\ud835\uddf2\ud835\uddf3\ud835\uddf4\ud835\uddf5\ud835\uddf6\ud835\uddf7\ud835\uddf8\ud835\uddf9\ud835\uddfa\ud835\uddfb\ud835\uddfc\ud835\uddfd\ud835\uddfe\ud835\uddff\ud835\ude00\ud835\ude01\ud835\ude02\ud835\ude03\ud835\ude04\ud835\ude05\ud835\ude06\ud835\ude07\ud835\uddd4\ud835\uddd5\ud835\uddd6\ud835\uddd7\ud835\uddd8\ud835\uddd9\ud835\uddda\ud835\udddb\ud835\udddc\ud835\udddd\ud835\uddde\ud835\udddf\ud835\udde0\ud835\udde1\ud835\udde2\ud835\udde3\ud835\udde4\ud835\udde5\ud835\udde6\ud835\udde7\ud835\udde8\ud835\udde9\ud835\uddea\ud835\uddeb\ud835\uddec\ud835\udded\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",sansItalic:"\ud835\ude22\ud835\ude23\ud835\ude24\ud835\ude25\ud835\ude26\ud835\ude27\ud835\ude28\ud835\ude29\ud835\ude2a\ud835\ude2b\ud835\ude2c\ud835\ude2d\ud835\ude2e\ud835\ude2f\ud835\ude30\ud835\ude31\ud835\ude32\ud835\ude33\ud835\ude34\ud835\ude35\ud835\ude36\ud835\ude37\ud835\ude38\ud835\ude39\ud835\ude3a\ud835\ude3b\ud835\ude08\ud835\ude09\ud835\ude0a\ud835\ude0b\ud835\ude0c\ud835\ude0d\ud835\ude0e\ud835\ude0f\ud835\ude10\ud835\ude11\ud835\ude12\ud835\ude13\ud835\ude14\ud835\ude15\ud835\ude16\ud835\ude17\ud835\ude18\ud835\ude19\ud835\ude1a\ud835\ude1b\ud835\ude1c\ud835\ude1d\ud835\ude1e\ud835\ude1f\ud835\ude20\ud835\ude211234567890",sansBoldItalic:"\ud835\ude56\ud835\ude57\ud835\ude58\ud835\ude59\ud835\ude5a\ud835\ude5b\ud835\ude5c\ud835\ude5d\ud835\ude5e\ud835\ude5f\ud835\ude60\ud835\ude61\ud835\ude62\ud835\ude63\ud835\ude64\ud835\ude65\ud835\ude66\ud835\ude67\ud835\ude68\ud835\ude69\ud835\ude6a\ud835\ude6b\ud835\ude6c\ud835\ude6d\ud835\ude6e\ud835\ude6f\ud835\ude3c\ud835\ude3d\ud835\ude3e\ud835\ude3f\ud835\ude40\ud835\ude41\ud835\ude42\ud835\ude43\ud835\ude44\ud835\ude45\ud835\ude46\ud835\ude47\ud835\ude48\ud835\ude49\ud835\ude4a\ud835\ude4b\ud835\ude4c\ud835\ude4d\ud835\ude4e\ud835\ude4f\ud835\ude50\ud835\ude51\ud835\ude52\ud835\ude53\ud835\ude54\ud835\ude55\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",script:"\ud835\udcb6\ud835\udcb7\ud835\udcb8\ud835\udcb9\u212f\ud835\udcbb\u210a\ud835\udcbd\ud835\udcbe\ud835\udcbf\ud835\udcc0\ud835\udcc1\ud835\udcc2\ud835\udcc3\u2134\ud835\udcc5\ud835\udcc6\ud835\udcc7\ud835\udcc8\ud835\udcc9\ud835\udcca\ud835\udccb\ud835\udccc\ud835\udccd\ud835\udcce\ud835\udccf\ud835\udc9c\u212c\ud835\udc9e\ud835\udc9f\u2130\u2131\ud835\udca2\u210b\u2110\ud835\udca5\ud835\udca6\u2112\u2133\ud835\udca9\ud835\udcaa\ud835\udcab\ud835\udcac\u211b\ud835\udcae\ud835\udcaf\ud835\udcb0\ud835\udcb1\ud835\udcb2\ud835\udcb3\ud835\udcb4\ud835\udcb51234567890",scriptBold:"\ud835\udcea\ud835\udceb\ud835\udcec\ud835\udced\ud835\udcee\ud835\udcef\ud835\udcf0\ud835\udcf1\ud835\udcf2\ud835\udcf3\ud835\udcf4\ud835\udcf5\ud835\udcf6\ud835\udcf7\ud835\udcf8\ud835\udcf9\ud835\udcfa\ud835\udcfb\ud835\udcfc\ud835\udcfd\ud835\udcfe\ud835\udcff\ud835\udd00\ud835\udd01\ud835\udd02\ud835\udd03\ud835\udcd0\ud835\udcd1\ud835\udcd2\ud835\udcd3\ud835\udcd4\ud835\udcd5\ud835\udcd6\ud835\udcd7\ud835\udcd8\ud835\udcd9\ud835\udcda\ud835\udcdb\ud835\udcdc\ud835\udcdd\ud835\udcde\ud835\udcdf\ud835\udce0\ud835\udce1\ud835\udce2\ud835\udce3\ud835\udce4\ud835\udce5\ud835\udce6\ud835\udce7\ud835\udce8\ud835\udce9\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",fraktur:"\ud835\udd1e\ud835\udd1f\ud835\udd20\ud835\udd21\ud835\udd22\ud835\udd23\ud835\udd24\ud835\udd25\ud835\udd26\ud835\udd27\ud835\udd28\ud835\udd29\ud835\udd2a\ud835\udd2b\ud835\udd2c\ud835\udd2d\ud835\udd2e\ud835\udd2f\ud835\udd30\ud835\udd31\ud835\udd32\ud835\udd33\ud835\udd34\ud835\udd35\ud835\udd36\ud835\udd37\ud835\udd04\ud835\udd05\u212d\ud835\udd07\ud835\udd08\ud835\udd09\ud835\udd0a\u210c\u2111\ud835\udd0d\ud835\udd0e\ud835\udd0f\ud835\udd10\ud835\udd11\ud835\udd12\ud835\udd13\ud835\udd14\u211c\ud835\udd16\ud835\udd17\ud835\udd18\ud835\udd19\ud835\udd1a\ud835\udd1b\ud835\udd1c\u21281234567890",frakturBold:"\ud835\udd86\ud835\udd87\ud835\udd88\ud835\udd89\ud835\udd8a\ud835\udd8b\ud835\udd8c\ud835\udd8d\ud835\udd8e\ud835\udd8f\ud835\udd90\ud835\udd91\ud835\udd92\ud835\udd93\ud835\udd94\ud835\udd95\ud835\udd96\ud835\udd97\ud835\udd98\ud835\udd99\ud835\udd9a\ud835\udd9b\ud835\udd9c\ud835\udd9d\ud835\udd9e\ud835\udd9f\ud835\udd6c\ud835\udd6d\ud835\udd6e\ud835\udd6f\ud835\udd70\ud835\udd71\ud835\udd72\ud835\udd73\ud835\udd74\ud835\udd75\ud835\udd76\ud835\udd77\ud835\udd78\ud835\udd79\ud835\udd7a\ud835\udd7b\ud835\udd7c\ud835\udd7d\ud835\udd7e\ud835\udd7f\ud835\udd80\ud835\udd81\ud835\udd82\ud835\udd83\ud835\udd84\ud835\udd85\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7\ud835\udfce",monospace:"\ud835\ude8a\ud835\ude8b\ud835\ude8c\ud835\ude8d\ud835\ude8e\ud835\ude8f\ud835\ude90\ud835\ude91\ud835\ude92\ud835\ude93\ud835\ude94\ud835\ude95\ud835\ude96\ud835\ude97\ud835\ude98\ud835\ude99\ud835\ude9a\ud835\ude9b\ud835\ude9c\ud835\ude9d\ud835\ude9e\ud835\ude9f\ud835\udea0\ud835\udea1\ud835\udea2\ud835\udea3\ud835\ude70\ud835\ude71\ud835\ude72\ud835\ude73\ud835\ude74\ud835\ude75\ud835\ude76\ud835\ude77\ud835\ude78\ud835\ude79\ud835\ude7a\ud835\ude7b\ud835\ude7c\ud835\ude7d\ud835\ude7e\ud835\ude7f\ud835\ude80\ud835\ude81\ud835\ude82\ud835\ude83\ud835\ude84\ud835\ude85\ud835\ude86\ud835\ude87\ud835\ude88\ud835\ude891234567890",doublestruck:"\ud835\udd52\ud835\udd53\ud835\udd54\ud835\udd55\ud835\udd56\ud835\udd57\ud835\udd58\ud835\udd59\ud835\udd5a\ud835\udd5b\ud835\udd5c\ud835\udd5d\ud835\udd5e\ud835\udd5f\ud835\udd60\ud835\udd61\ud835\udd62\ud835\udd63\ud835\udd64\ud835\udd65\ud835\udd66\ud835\udd67\ud835\udd68\ud835\udd69\ud835\udd6a\ud835\udd6b\ud835\udd38\ud835\udd39\u2102\ud835\udd3b\ud835\udd3c\ud835\udd3d\ud835\udd3e\u210d\ud835\udd40\ud835\udd41\ud835\udd42\ud835\udd43\ud835\udd44\u2115\ud835\udd46\u2119\u211a\u211d\ud835\udd4a\ud835\udd4b\ud835\udd4c\ud835\udd4d\ud835\udd4e\ud835\udd4f\ud835\udd50\u21241234567890",circled:"\u24d0\u24d1\u24d2\u24d3\u24d4\u24d5\u24d6\u24d7\u24d8\u24d9\u24da\u24db\u24dc\u24dd\u24de\u24df\u24e0\u24e1\u24e2\u24e3\u24e4\u24e5\u24e6\u24e7\u24e8\u24e9\u24b6\u24b7\u24b8\u24b9\u24ba\u24bb\u24bc\u24bd\u24be\u24bf\u24c0\u24c1\u24c2\u24c3\u24c4\u24c5\u24c6\u24c7\u24c8\u24c9\u24ca\u24cb\u24cc\u24cd\u24ce\u24cf1234567890",inverseCircled:"abcdefghijklmnopqrstuvwxyz\ud83c\udd50\ud83c\udd51\ud83c\udd52\ud83c\udd53\ud83c\udd54\ud83c\udd55\ud83c\udd56\ud83c\udd57\ud83c\udd58\ud83c\udd59\ud83c\udd5a\ud83c\udd5b\ud83c\udd5c\ud83c\udd5d\ud83c\udd5e\ud83c\udd5f\ud83c\udd60\ud83c\udd61\ud83c\udd62\ud83c\udd63\ud83c\udd64\ud83c\udd65\ud83c\udd66\ud83c\udd67\ud83c\udd68\ud83c\udd691234567890",squared:"abcdefghijklmnopqrstuvwxyz\ud83c\udd30\ud83c\udd31\ud83c\udd32\ud83c\udd33\ud83c\udd34\ud83c\udd35\ud83c\udd36\ud83c\udd37\ud83c\udd38\ud83c\udd39\ud83c\udd3a\ud83c\udd3b\ud83c\udd3c\ud83c\udd3d\ud83c\udd3e\ud83c\udd3f\ud83c\udd40\ud83c\udd41\ud83c\udd42\ud83c\udd43\ud83c\udd44\ud83c\udd45\ud83c\udd46\ud83c\udd47\ud83c\udd48\ud83c\udd491234567890"},T={};Object.keys(R).forEach((function(e){T[e]=S(R[e])}));var N={},C={},H=S(R.normal);Object.values(T).forEach((function(e){e.forEach((function(e,t){N[e]=H[t]}))})),Object.entries(T).forEach((function(e){var t=Object(c.a)(e,2),r=t[0],n=t[1];C[r]={},n.forEach((function(e,t){C[r][H[t]]=e}))}));var M=function(e,t){if(!t||!C[t])throw new Error("Unknown font");if("string"!==typeof e)throw new Error("Text arg must be a string");var r=C[t];return S(e).map((function(e){return r[N[e]]||e})).join("")};function A(e){return!!e.outerHTML}var D=function e(t,r){Array.from(r.childNodes).forEach((function(r,n){if(A(r))if(1!==r.nodeType||r.getAttribute("data-code")){if(1===r.nodeType){var o=r.getAttribute("data-code"),a=r;a.previousSibling&&function(e){return!!A(e)&&e.outerHTML.startsWith("<div>")}(a.previousSibling)&&t.push("\n"),o&&t.push({code:r.getAttribute("data-code")||"",inputText:r.getAttribute("data-label")||"",previewText:r.getAttribute("data-preview")||"",format:r.getAttribute("data-format")||"",className:r.getAttribute("data-classes")||"",style:r.getAttribute("data-styles")||""})}}else 0!==n&&r.outerHTML.startsWith("<div>")&&t.push("\n"),(r.previousSibling||r.nextSibling)&&r.outerHTML.startsWith("<br>")&&t.push("\n"),e(t,r);else t.push(r.data)}))},L=function(e){if(!e)return[];var t=[];return D(t,e),t},E=function(e,t,r,n){var o=r<n?r:n,a=r<n?n:r,i=e.data.substring(0,o),c=e.data.substring(o,a),s=e.data.substring(a,e.data.length);e.data=i+M(c,t)+s},I=function(e,t){var r=window.getSelection();r&&r.anchorNode&&r.focusNode&&function(e,t,r){var n,o,a=!1;if(t&&t.anchorNode&&t.focusNode){var i={anchorOffset:t.anchorOffset,anchorNode:t.anchorNode,focusNode:t.focusNode,focusOffset:t.focusOffset};console.log(Object.assign({},i)),function e(n){var o=Array.from(n.childNodes),c=n===t.anchorNode,s=n===t.focusNode;o.forEach((function(n,o){if(A(n))if(1!==n.nodeType||n.getAttribute("data-code")){if(1===n.nodeType){var d=n===t.anchorNode||c&&t.anchorOffset===o,u=n===t.focusNode||s&&t.focusOffset===o;d&&u?n.setAttribute("data-format",r):d||u?(n.setAttribute("data-format",r),a=!a):a&&n.setAttribute("data-format",r)}}else(c&&t.anchorOffset===o||s&&t.focusOffset===o)&&(a=!a),e(n);else if(c&&t.anchorOffset===o||s&&t.focusOffset===o)a||(n.data=M(n.data,r)),a=!a;else if(n===t.anchorNode&&n===t.focusNode){var l=Math.min(t.anchorOffset,t.focusOffset),f=Math.max(t.anchorOffset,t.focusOffset),h=n.data.length-f;E(n,r,l,f),i.anchorOffset=n.data.length-h,i.focusOffset=l}else if(n===t.anchorNode){if(a){var p=n.data.length-t.anchorOffset;E(n,r,0,t.anchorOffset),i.anchorOffset=n.data.length-p,console.log({oldOffset:t.anchorOffset,newOffset:n.data.length-p})}else E(n,r,t.anchorOffset,n.data.length);a=!a}else if(n===t.focusNode){if(a){var b=t.focusOffset,j=n.data.length-t.focusOffset;E(n,r,0,t.focusOffset),i.focusOffset=n.data.length-j,console.log({oldOffset:b,newOffset:n.data.length-j})}a?E(n,r,0,t.focusOffset):E(n,r,t.focusOffset,n.data.length),a=!a}else a&&(n.data=M(n.data,r))})),(s&&n.childNodes.length===t.focusOffset||c&&n.childNodes.length===t.anchorOffset)&&(a=!a)}(e);var c=new Range,s=i.anchorNode.compareDocumentPosition(i.focusNode);4===s?(c.setStart(i.anchorNode,i.anchorOffset),c.setEnd(i.focusNode,i.focusOffset)):2===s?(c.setEnd(i.anchorNode,i.anchorOffset),c.setStart(i.focusNode,i.focusOffset)):i.anchorOffset<i.focusOffset?(c.setStart(i.anchorNode,i.anchorOffset),c.setEnd(i.focusNode,i.focusOffset)):(c.setEnd(i.anchorNode,i.anchorOffset),c.setStart(i.focusNode,i.focusOffset)),console.log(i),null===(n=document.getSelection())||void 0===n||n.removeAllRanges(),null===(o=document.getSelection())||void 0===o||o.addRange(c)}}(e,r,t)},F={lineHeight:1.8,border:"1px solid black",borderRadius:5,minHeight:40,padding:15,display:"block",whiteSpace:"pre-wrap",width:"100%"},P=function(e){Object(l.a)(r,e);var t=Object(f.a)(r);function r(e){var o;return Object(b.a)(this,r),(o=t.call(this,e)).debouncing=!1,o.shouldUpdate=!1,o.debounceTimer=null,o.shouldAddHistory=!1,o.pasteHandler=function(){setTimeout((function(){if(o.editorRef.current){var e=L(o.editorRef.current);o.editorRef.current.innerHTML="",w(e,o.editorRef.current,o.props.variableStyle),o.history.add(o.editorRef.current.innerHTML),o.shouldAddHistory=!0,o.updateState(e)}}),0)},o.inputHandler=function(e){if(!o.editorRef.current)return!0;switch(e.inputType){case"historyUndo":return!1===o.history.back()||(o.editorRef.current.innerHTML=o.history.getState(),o.shouldAddHistory=!0,o.updateState()),!1;case"historyRedo":return!1===o.history.forward()||(o.editorRef.current.innerHTML=o.history.getState(),o.shouldAddHistory=!0,o.updateState()),!1;case"insertText":o.shouldAddHistory||null===e.data||" "===e.data||1===o.editorRef.current.innerHTML.length?o.history.add(o.editorRef.current.innerHTML):o.history.replace(o.editorRef.current.innerHTML),o.shouldAddHistory=!1,o.updateState();break;case"insertParagraph":o.shouldAddHistory=!0,o.history.add(o.editorRef.current.innerHTML),o.updateState();break;case"insertFromPaste":break;case"":o.pasteHandler();break;default:o.history.add(o.editorRef.current.innerHTML),o.shouldAddHistory=!0,o.updateState()}return!0},o.keydownHandler=function(e){if(90===e.keyCode&&e.ctrlKey){if(e.preventDefault(),!o.editorRef.current||!1===o.history.back())return;o.shouldAddHistory=!0,o.editorRef.current.innerHTML=o.history.getState(),o.updateState()}if(89===e.keyCode&&e.ctrlKey){if(e.preventDefault(),!o.editorRef.current||!1===o.history.forward())return;o.shouldAddHistory=!0,o.editorRef.current.innerHTML=o.history.getState(),o.updateState()}},o.updateState=function(e){o.props.debounce?o.debounce():o.props.onChange(e||L(o.editorRef.current))},o.debounce=function(){o.debouncing?o.shouldUpdate=!0:(o.props.onChange(L(o.editorRef.current)),o.debouncing=!0,o.debounceTimer=window.setTimeout((function(){o.shouldUpdate&&(o.props.onChange(L(o.editorRef.current)),o.shouldUpdate=!1),o.debouncing=!1,o.debounceTimer=null}),o.props.debounceInterval))},o.canUndo=function(){return o.history.allowedBack()},o.undo=function(){if(o.editorRef.current&&!o.props.disabled){var e=o.history.back();!1!==e&&(o.editorRef.current.innerHTML=e),o.shouldAddHistory=!0,o.updateState()}},o.paste=function(){o.editorRef.current&&!o.props.disabled&&(o.shouldAddHistory=!0,navigator.permissions.query({name:"clipboard-read"}).then((function(e){"granted"!==e.state&&"prompt"!==e.state||navigator.clipboard.read().then((function(e){e[0].getType("text/html").then((function(e){return e.text()})).then((function(e){document.execCommand("insertHTML",!1,e)}))}))})))},o.canRedo=function(){return o.history.allowedForward()},o.redo=function(){if(o.editorRef.current&&!o.props.disabled){var e=o.history.forward();e&&(o.editorRef.current.innerHTML=e),o.shouldAddHistory=!0,o.updateState()}},o.format=function(e){o.editorRef.current&&!o.props.disabled&&o.isFocused()&&(I(o.editorRef.current,e),o.history.add(o.editorRef.current.innerHTML),o.shouldAddHistory=!0,o.updateState())},o.refresh=function(){o.editorRef.current&&(o.editorRef.current.innerHTML="",w(o.props.startValue||[],o.editorRef.current,o.props.variableStyle))},o.addVariable=function(e){o.editorRef.current&&!o.props.disabled&&o.isFocused()&&(!function(e,t,r){var n=k(t,r),o=window.getSelection();o&&"Range"===o.type?console.log("Range is not supported yet"):g(0,o,n)}(o.editorRef.current,e,o.props.variableStyle),o.history.add(o.editorRef.current.innerHTML),o.shouldAddHistory=!0,o.updateState())},o.addText=function(e){o.editorRef.current&&!o.props.disabled&&o.isFocused()&&(!function(e,t){var r=window.getSelection();if(!r||"Range"!==r.type){var n=new Text(t);g(0,r,n)}}(o.editorRef.current,e),o.shouldAddHistory=!0,o.history.add(o.editorRef.current.innerHTML),o.updateState())},o.onDrop=function(e){o.props.disableDrag?e.preventDefault():o.pasteHandler()},o.onContextMenu=function(e){o.props.disableContextMenu&&e.preventDefault(),o.props.onContextMenu&&o.props.onContextMenu(e)},o.props=e,o.editorRef=Object(n.createRef)(),o.history=e.undoStackReference&&e.undoStackReference.current?e.undoStackReference.current:new v(""),document.execCommand("defaultParagraphSeparator",!1,"div"),o}return Object(j.a)(r,[{key:"componentDidMount",value:function(){this.editorRef.current&&(w(this.props.startValue||[],this.editorRef.current,this.props.variableStyle),this.history.replace(this.editorRef.current.innerHTML),this.editorRef.current.addEventListener("paste",this.pasteHandler,!1),this.editorRef.current.addEventListener("input",this.inputHandler,!1),this.editorRef.current.addEventListener("keydown",this.keydownHandler,!1))}},{key:"componentWillUnmount",value:function(){this.editorRef.current&&(this.editorRef.current.removeEventListener("paste",this.pasteHandler,!1),this.editorRef.current.removeEventListener("input",this.inputHandler,!1),this.editorRef.current.removeEventListener("keydown",this.keydownHandler,!1),null!==this.debounceTimer&&(window.clearTimeout(this.debounceTimer),this.shouldUpdate&&this.props.onChange(L(this.editorRef.current))))}},{key:"isFocused",value:function(){var e=document.getSelection();return!!e&&(document.activeElement===this.editorRef.current||Boolean(this.editorRef.current&&this.editorRef.current.contains(null===e||void 0===e?void 0:e.anchorNode)))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"react-unicode-editor ".concat(this.props.className||""),contentEditable:!this.props.disabled,role:"textbox","aria-label":"textarea",onContextMenu:this.onContextMenu,onDrop:this.onDrop,tabIndex:0,style:Object.assign(Object.assign({},F),this.props.style),ref:this.editorRef},void 0)}}]),r}(n.Component);P.defaultProps={style:{},disabled:!1,className:"",debounce:!0,debounceInterval:200,startValue:[],disableContextMenu:!1,onContextMenu:null,undoStackReference:void 0,variableStyle:void 0,disableDrag:!0};r(45),r(46);var B=r(9),U=r(31),V=r(55),K=r(56),q=r(36),W=[["normal"," Normal abc"],["sansBold","Bold (Sans) \ud835\uddee\ud835\uddef\ud835\uddf0"],["sansItalic","Italic (Sans) \ud835\ude22\ud835\ude23\ud835\ude24"],["sansBoldItalic","Bold Italic (Sans) \ud835\ude56\ud835\ude57\ud835\ude58"],["bold","Bold (Serif) \ud835\udc1a\ud835\udc1b\ud835\udc1c"],["italic","Italic (Serif) \ud835\udc4e\ud835\udc4f\ud835\udc50"],["boldItalic","Bold Italic (Serif) \ud835\udc82\ud835\udc83\ud835\udc84"],["script","Script \ud835\udcb6\ud835\udcb7\ud835\udcb8"],["scriptBold","Script Bold \ud835\udcea\ud835\udceb\ud835\udcec"],["fraktur","Fraktur \ud835\udd1e\ud835\udd1f\ud835\udd20"],["frakturBold","Frak Bold \ud835\udd86\ud835\udd87\ud835\udd88"],["monospace","Monospace \ud835\ude8a\ud835\ude8b\ud835\ude8c"],["doublestruck","Double \ud835\udd52\ud835\udd53\ud835\udd54"],["circled","Circled \u24d0\u24d1\u24d2"],["inverseCircled","Circle 2 \ud83c\udd50\ud83c\udd51\ud83c\udd52 (CAPS)"],["squared","Squared \ud83c\udd30\ud83c\udd31\ud83c\udd32 (CAPS)"]],J=function(e){var t=e.onFormatClick;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(U.a,{className:"mr-1",variant:"outline-primary",onClick:function(){t("normal")},onMouseDown:function(e){e.preventDefault()},as:"div",children:"Regular"}),Object(m.jsx)(U.a,{className:"mr-1",variant:"outline-primary",onClick:function(){t("sansBold")},onMouseDown:function(e){e.preventDefault()},as:"div",children:"\ud835\udc01"}),Object(m.jsx)(U.a,{className:"mr-1",variant:"outline-primary",onClick:function(){t("sansItalic")},onMouseDown:function(e){e.preventDefault()},as:"div",children:"\ud835\udc8a"}),Object(m.jsx)(V.a,{onSelect:function(e){t(e)},as:K.a,id:"dropdown-variants-formats",variant:"outline-primary",title:"More...",onMouseDown:function(e){e.preventDefault()},children:W.map((function(e){var t=Object(c.a)(e,2),r=t[0],n=t[1];return Object(m.jsx)(q.a.Item,{eventKey:r,children:n},"fdd_".concat(r))}))},"formats")]})},z="#1ce600",G="#29aaff",Q=function(e){var t=e.onVariableClick;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"mr-1 text-secondary font-weight-light pl-1 d-none d-lg-inline-block",children:"Variables: "}),Object(m.jsxs)(V.a,{as:K.a,id:"dropdown-variants-user-vars",variant:"outline-secondary",title:"User",onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},children:[Object(m.jsx)(q.a.Item,{eventKey:"title",onSelect:function(){t({inputText:"Title",code:"<<user.title>>",previewText:"Mr",style:{color:"white",backgroundColor:z}})},children:"Title"}),Object(m.jsx)(q.a.Item,{eventKey:"first-name",onSelect:function(){t({inputText:"First Name",code:"<<user.firstName>>",previewText:"John",style:{color:"white",backgroundColor:z}})},children:"First Name"}),Object(m.jsx)(q.a.Item,{eventKey:"last-name",onSelect:function(){t({inputText:"Last Name",code:"<<user.lastName>>",previewText:"Smith",style:{color:"white",backgroundColor:z}})},children:"Last Name"})]},"user-vars")," ",Object(m.jsxs)(V.a,{as:K.a,id:"dropdown-variants-product-vars",variant:"outline-secondary",title:"Product",onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},children:[Object(m.jsx)(q.a.Item,{eventKey:"product-title",onSelect:function(){t({inputText:"Product Name",code:"<<product.title>>",previewText:"Deluxe Vacuum Cleaner",style:{color:"white",backgroundColor:G}})},children:"Name"}),Object(m.jsx)(q.a.Item,{eventKey:"product-price",onSelect:function(){t({inputText:"Product Price",code:"<<product.price>>",previewText:"49.99",style:{color:"white",backgroundColor:G}})},children:"Price"}),Object(m.jsx)(q.a.Item,{eventKey:"product-price",onSelect:function(){t({inputText:"Product Category",code:"<<product.category>>",previewText:"Home & Appliances",style:{color:"white",backgroundColor:G}})},children:"Category"})]},"product-vars")]})},X=r(35),Y=r.n(X),Z=function(e){var t=e.insertText;return Object(m.jsxs)(q.a,{alignRight:!0,className:"float-right",children:[Object(m.jsx)(q.a.Toggle,{variant:"outline-warning",id:"emoji-dropdown",onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},children:"\ud83d\ude4a\ud83d\ude00\u2764\ufe0f"}),Object(m.jsx)(q.a.Menu,{children:Object(m.jsx)(Y.a,{onEmojiClick:function(e,r){e.preventDefault(),t(r.emoji)},disableAutoFocus:!0,native:!0})})]})},_=r(57),$=function(e){var t=e.heading,r=e.text;return Object(m.jsxs)(_.a,{className:"pt-4",style:{whiteSpace:"pre-wrap",overflowWrap:"break-word"},children:[Object(m.jsx)("h4",{children:t}),r]})},ee=function(e){var t=e.mounted,r=e.setMounted,n=e.disabled,o=e.setDisabled;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(U.a,{className:"mr-1",onClick:function(){r(!t)},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},as:"div",children:t?"Unmount":"Mount"}),Object(m.jsx)(U.a,{className:"mr-1",onClick:function(){o(!n)},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},as:"div",children:n?"Enable":"Disable"})]})},te=function(e){var t=e.chars;return Object(m.jsxs)(m.Fragment,{children:["Characters:"," ",Object(m.jsx)("span",{style:t.chars>29?{color:"red",fontWeight:"bold"}:{},children:t.chars})," ","- Bytes:"," ",t.bytes]})},re=Object(B.b)({}),ne=function(e){var t=e.redo,r=e.undo,n=e.canUndo,o=e.canRedo,a=e.paste,i=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return Object(m.jsxs)(B.c,{bridge:re,dark:i,children:[Object(m.jsx)(B.c.Option,{disabled:!n,onClick:r,children:"Undo"}),Object(m.jsx)(B.c.Option,{disabled:!o,onClick:t,children:"Redo"}),Object(m.jsx)(B.c.Divider,{}),Object(m.jsx)(B.c.Option,{onClick:function(){document.execCommand("cut")},children:"Cut"}),Object(m.jsx)(B.c.Option,{onClick:function(){document.execCommand("copy")},children:"Copy"}),Object(m.jsx)(B.c.Option,{onClick:a,children:"Paste"})]})};var oe=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),r=t[0],o=t[1],a=Object(n.useState)(""),i=Object(c.a)(a,2),l=i[0],f=i[1],h=Object(n.useState)(""),p=Object(c.a)(h,2),b=p[0],j=p[1],O=Object(n.useState)(!1),y=Object(c.a)(O,2),g=y[0],x=y[1],k=Object(n.useState)(!0),w=Object(c.a)(k,2),S=w[0],R=w[1],T=Object(n.useState)({chars:0,bytes:0}),N=Object(c.a)(T,2),C=N[0],H=N[1],A=Object(n.useRef)(new v),D=Object(n.useRef)(null),L={minHeight:100,backgroundColor:g?"grey":"white",borderColor:C.chars>29?"red":"grey",outlineColor:C.chars>29?"red":"grey",opacity:g?"50%":void 0};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ne,{undo:function(){D.current&&D.current.undo()},redo:function(){D.current&&D.current.redo()},paste:D.current?D.current.paste:function(){},canUndo:!!D.current&&D.current.canUndo(),canRedo:!!D.current&&D.current.canRedo()}),Object(m.jsxs)(s.a,{className:"p-3",children:[Object(m.jsx)(d.a,{className:"mb-4 border-bottom",children:Object(m.jsx)(u.a,{children:Object(m.jsx)("h1",{className:"h3",children:"react-unicode-editor example"})})}),Object(m.jsx)(d.a,{children:Object(m.jsx)(u.a,{children:Object(m.jsx)(te,{chars:C})})}),Object(m.jsx)(d.a,{className:"mb-2",children:Object(m.jsx)(u.a,{children:S?Object(m.jsx)(B.a,{data:{},bridge:re,children:Object(m.jsx)(P,{onChange:function(e){o(e),f(e.reduce((function(e,t){return"string"===typeof t?e+t:"normal"===t.format?e+t.previewText:e+M(t.previewText,t.format||"normal")}),"")),j(function(e){return e.reduce((function(e,t){return"string"===typeof t?e+t:e+t.code}),"")}(e)),H(e.reduce((function(e,t){return"string"===typeof t?{chars:e.chars+Array.from(t).length,bytes:e.bytes+t.length}:e}),{chars:0,bytes:0}))},startValue:r,disableContextMenu:!1,undoStackReference:A,ref:D,style:L,disabled:g,debounceInterval:600})}):Object(m.jsx)("h4",{style:{textAlign:"center",margin:"1.5em"},children:"Not Mounted"})})}),Object(m.jsxs)(d.a,{className:"mb-4",children:[Object(m.jsx)(u.a,{xs:8,md:10,children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(u.a,{className:"mb-2",xs:12,md:7,children:Object(m.jsx)(J,{onFormatClick:function(e){D.current&&D.current.format(e)}})}),Object(m.jsx)(u.a,{xs:12,md:5,children:Object(m.jsx)(Q,{onVariableClick:function(e){D.current&&D.current.addVariable(e)}})})]})}),Object(m.jsx)(u.a,{xs:4,md:2,children:Object(m.jsx)(Z,{insertText:function(e){D.current&&D.current.addText(e)}})})]}),Object(m.jsxs)(d.a,{className:"mb-3",children:[Object(m.jsx)(u.a,{sm:12,md:6,children:Object(m.jsx)($,{heading:"Preview:",text:l})}),Object(m.jsx)(u.a,{sm:12,md:6,children:Object(m.jsx)($,{heading:"Serialized:",text:b})})]}),Object(m.jsx)(d.a,{className:"mb-3",children:Object(m.jsx)(u.a,{children:Object(m.jsx)(ee,{mounted:S,setMounted:R,disabled:g,setDisabled:x})})})]})]})},ae=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,61)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(oe,{})}),document.getElementById("root")),ae()}},[[51,1,2]]]);
//# sourceMappingURL=main.65a0bc4e.chunk.js.map