!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t(1),t(3)},function(e,n,t){"use strict";var o=t(2),a=document.querySelector("#inputBox"),r=document.querySelector("#outputBox"),s=document.querySelector("#fromScheme"),c=document.querySelector("#toScheme"),u=document.querySelectorAll(".copy-button"),i=document.querySelector("#snackbar"),l=o.vTranslit.getAvailableSchemes(),h=function(){};l.forEach(function(e){"Itrn"!==e.code?s.options[s.options.length]=new Option(e.name,e.code):s.options[s.options.length]=new Option(e.name,e.code,!0,!0)});var d=function(e){i.className="show",i.textContent=e;setTimeout(function(){i.className=i.className.replace("show","")},3e3)},f=function(e,n){var t=n.options[n.selectedIndex].text;d("The "+e+" is changed to '"+t+"'.")},p=function(){"Itrn"===s.value&&c.length<l.length?(c.options.length=0,l.forEach(function(e){"Itrn"!==e.code&&(c.options[c.options.length]=new Option(e.name,e.code))})):(c.options.length=0,c.options[0]=new Option("ITRANS","Itrn")),m()},m=function(e){h=o.vTranslit.init(s.value,c.value),e&&(f("to-scheme",c),v())},v=function(){return r.value=h(a.value)};s.addEventListener("change",function(){p(),f("from-scheme",s)}),c.addEventListener("change",m),u.forEach(function(e){return e.addEventListener("click",function(e){!function(e){e.value?(e.select(),document.execCommand("Copy"),d("Selected text is copied.")):d("There is nothing to copy!")}(document.querySelector(e.target.dataset.clipTarget))})}),a.addEventListener("keyup",v),window.addEventListener("DOMContentLoaded",p)},function(e,n,t){var o;"undefined"!=typeof self&&self,o=function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.vTranslit=void 0;var o=t(1),a=t(2),r=t(3),s=t(4),c=t(5),u=t(6);n.vTranslit={getAvailableSchemes:o.getAvailableSchemes,init:function(e,n){var t=(0,o.getScheme)(e),i=(0,o.getScheme)(n),l=(0,a.makeFromSchemeTree)(t),h=l.fromSchemeTree,d=l.maxTokenLength,f=(0,a.makeToSchemeTree)(i);return function(e){var n=(0,u.vTokenize)(e,d,(0,r.getCharDetails)(h)),t=(0,s.processTokens)(n,h,i),o=t.processedTokens,a=t.tokensType;return(0,c.translitTokens)(o,a,f).join("")}}}},function(e,n,t){var o;"undefined"!=typeof self&&self,o=function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.schemes=n.getScheme=n.getAvailableSchemes=void 0;var o=t(1);n.getAvailableSchemes=o.getAvailableSchemes,n.getScheme=o.getScheme,n.schemes=o.schemes},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getScheme=n.getAvailableSchemes=n.schemes=void 0;var o=t(2),a=t(3),r=t(4),s=t(5),c=t(6),u=n.schemes={Deva:o.devanagariScheme,Itrn:a.itransScheme,Knda:r.kannadaScheme,Taml:s.tamilScheme,Telu:c.teluguScheme};n.getAvailableSchemes=function(){var e=[];return Object.values(u).forEach(function(n){e.push({code:n.about.schemeCode,name:n.about.schemeName})}),e},n.getScheme=function(e){if(u[e])return u[e];throw new Error("No Scheme found with the given schemeCode: '"+e+"'")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.devanagariScheme={about:{schemeCode:"Deva",schemeName:"Devanagari",type:"brahmic"},data:{consonants:["क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","","प","फ","ब","भ","म","य","र","","ल","ळ","","व","श","ष","स","ह"],deadConsonants:["क्","ख्","ग्","घ्","ङ्","च्","छ्","ज्","झ्","ञ्","ट्","ठ्","ड्","ढ्","ण्","त्","थ्","द्","ध्","न्","","प्","फ्","ब्","भ्","म्","य्","र्","","ल्","ळ्","","व्","श्","ष्","स्","ह्"],symbols:["०","१","२","३","४","५","६","७","८","९","।","॥","ॐ","ऽ","ं","ः","ँ"],virama:["्"],vowelMarks:["","ा","ि","ी","ु","ू","ृ","ॄ","ॢ","ॣ","े","","ै","ो","","ौ"],vowels:["अ","आ","इ","ई","उ","ऊ","ऋ","ॠ","ऌ","ॡ","ए","","ऐ","ओ","","औ"]}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.itransScheme={about:{schemeCode:"Itrn",schemeName:"ITRANS",type:"roman"},data:{consonants:["ka","kha","ga","gha",["~Na","N^a"],"cha","Cha","ja","jha",["~na","JNa"],"Ta","Tha","Da","Dha","Na","ta","tha","da","dha","na","^na","pa","pha","ba","bha","ma","ya","ra","Ra","la","La","zha",["va","wa"],"sha",["Sha","Sa","shha"],"sa","ha"],deadConsonants:["k","kh","g","gh",["~N","N^"],"ch","Ch","j","jh",["~n","JN"],"T","Th","D","Dh","N","t","th","d","dh","n","^n","p","ph","b","bh","m","y","r","R","l","L","zh",["v","w"],"sh",["Sh","S","shh"],"s","h"],symbols:["0","1","2","3","4","5","6","7","8","9","|","||",["OM","AUM"],".a",["M",".m"],["H",".h"],".N"],virama:[";;"],vowelMarks:["a",["A","aa"],"i",["I","ii"],"u",["U","uu"],["RRi","R^i"],["RRI","R^I"],["LLi","L^i"],["LLI","L^I"],"e","E","ai","o","O","au"],vowels:["a",["A","aa"],"i",["I","ii"],"u",["U","uu"],["RRi","R^i"],["RRI","R^I"],["LLi","L^i"],["LLI","L^I"],"e","E","ai","o","O","au"]}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.kannadaScheme={about:{schemeCode:"Knda",schemeName:"Kannada",type:"brahmic"},data:{consonants:["ಕ","ಖ","ಗ","ಘ","ಙ","ಚ","ಛ","ಜ","ಝ","ಞ","ಟ","ಠ","ಡ","ಢ","ಣ","ತ","ಥ","ದ","ಧ","ನ","","ಪ","ಫ","ಬ","ಭ","ಮ","ಯ","ರ","ಱ","ಲ","ಳ","","ವ","ಶ","ಷ","ಸ","ಹ"],deadConsonants:["ಕ್","ಖ್","ಗ್","ಘ್","ಙ್","ಚ್","ಛ್","ಜ್","ಝ್","ಞ್","ಟ್","ಠ್","ಡ್","ಢ್","ಣ್","ತ್","ಥ್","ದ್","ಧ್","ನ್","","ಪ್","ಫ್","ಬ್","ಭ್","ಮ್","ಯ್","ರ್","ಱ್","ಲ್","ಳ್","","ವ್","ಶ್","ಷ್","ಸ್","ಹ್"],symbols:["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯","।","॥","","ಽ","ಂ","ಃ","ಁ"],virama:["್"],vowelMarks:["","ಾ","ಿ","ೀ","ು","ೂ","ೃ","ೄ","","","ೆ","ೇ","ೈ","ೊ","ೋ","ೌ"],vowels:["ಅ","ಆ","ಇ","ಈ","ಉ","ಊ","ಋ","","ಌ","","ಎ","ಏ","ಐ","ಒ","ಓ","ಔ"]}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.tamilScheme={about:{schemeCode:"Taml",schemeName:"Tamil",type:"brahmic"},data:{consonants:["க","","","","ங","ச","","ஜ","","ஞ","ட","","","","ண","த","","","","ந","ன","ப","","","","ம","ய","ர","ற","ல","ள","ழ","வ","ஶ","ஷ","ஸ","ஹ"],deadConsonants:["க்","","","","ங்","ச்","","ஜ்","","ஞ்","ட்","","","","ண்","த்","","","","ந்","ன்","ப்","","","","ம்","ய்","ர்","ற்","ல்","ள்","ழ்","வ்","ஶ்","ஷ்","ஸ்","ஹ்"],symbols:["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯","","","ௐ","","ஂ","ஃ",""],virama:["்"],vowelMarks:["","ா","ி","ீ","ு","ூ","","","","","ெ","ே","ை","ொ","ோ","ௌ"],vowels:["அ","ஆ","இ","ஈ","உ","ஊ","","","","","எ","ஏ","ஐ","ஒ","ஓ","ஔ"]}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.teluguScheme={about:{schemeCode:"Telu",schemeName:"Telugu",type:"brahmic"},data:{consonants:["క","ఖ","గ","ఘ","ఙ","చ","ఓ","జ","ఝ","ఞ","ట","ఠ","డ","ఢ","ణ","త","థ","ద","ధ","న","","ఢ","ణ","బ","భ","మ","య","ర","ఱ","ల","ళ","","వ","శ","ష","స","హ"],deadConsonants:["క్","ఖ్","గ్","ఘ్","ఙ్","చ్","ఓ్","జ్","ఝ్","ఞ్","ట్","ఠ్","డ్","ఢ్","ణ్","త్","థ్","ద్","ధ్","న్","","ప్","ణ్","బ్","భ్","మ్","య్","ర్","ఱ్","ల్","ళ్","","వ్","శ్","ష్","స్","హ్"],symbols:["౦","౧","౨","౩","౪","ౣ","౬","౭","౦","౯","।","॥","","ఽ","ం","ః","ఁ"],virama:["్"],vowelMarks:["","ా","ి","ీ","ు","ూ","ృ","ౄ","","","ె","ే","ై","ొ","ృ","ౌ"],vowels:["అ","ఆ","ఇ","ఀ","ఉ","ఊ","ః","","ఌ","","ఎ","ఏ","ఐ","ఒ","ఓ","ఔ"]}}}])},e.exports=o()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e){return Array.isArray(e)?e[0]:e},a=function(e,n,t,o,a,r){e&&(o[e]={aksharaIndex:a+"#"+n,alternateIndex:t,char:e,type:a},r.push(e.length))},r=function(e,n,t){var o={};return"roman"===e.about.type&&"consonants"===n?o:(e.data[n].forEach(function(e,r){Array.isArray(e)?e.forEach(function(e,s){a(e,r,s,o,n,t)}):a(e,r,0,o,n,t)}),o)},s=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a={};return e.data[n].forEach(function(r,s){!function(e,n,t,a,r,s){var c={char:{},type:r};if(s){var u=t.data[s][n];c.char[s]=o(u)}c.char[r]=o(e),a[r+"#"+n]=c}(r,s,e,a,n,t)}),a};n.makeFromSchemeTree=function(e){var n=[];return{fromSchemeTree:Object.assign({},r(e,"deadConsonants",n),r(e,"consonants",n),r(e,"vowels",n),r(e,"vowelMarks",n),r(e,"symbols",n)),maxTokenLength:Math.max.apply(Math,n)}},n.makeToSchemeTree=function(e){var n={};return n=Object.assign({},n,s(e,"deadConsonants","consonants"),s(e,"consonants","deadConsonants"),s(e,"vowels","vowelMarks"),s(e,"vowelMarks","vowels"),s(e,"symbols"))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.getCharDetails=function(e){return function(n){var t=e[n];return" "===n?{char:n,type:"pause"}:"_"===n?{char:n,type:"skip"}:t||{char:n,type:"unknown"}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.processTokens=function(e,n,t){for(var o=e.slice(),a=[],r=0;r<o.length;r+=1){var s=o[r],c=r<o.length-1?o[r+1]:{type:"strEnd"},u=r>0?o[r-1]:{type:"strStart"},i=s.type;"brahmic"===t.about.type?"deadConsonants"===i&&"vowelMarks"===c.type?i="consonants":"vowels"===i&&"deadConsonants"===u.type?i="vowelMarks":"vowelMarks"===i&&"deadConsonants"!==u.type&&(i="vowels"):"roman"===t.about.type&&"consonants"===i&&"vowelMarks"===c.type&&(i="deadConsonants"),a.push(i)}return{processedTokens:o,tokensType:a}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.translitTokens=function(e,n,t){var o=[];return e.forEach(function(e,a){var r=n[a];"unknown"===r?o.push(e.char):"pause"===r?o.push(e.char):"skip"===r?o.push(""):o.push(t[e.aksharaIndex].char[r])}),o}},function(e,n,t){var o;"undefined"!=typeof self&&self,o=function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e,n,t,o){return e===n||o===t.length-1},a=function(e,n){return n>-1?{foundIndex:n,token:e[n]}:{foundIndex:0,token:e[0]}},r=function(e){return"unknown"!==e.type};n.vTokenize=function(e,n,t){for(var s=e.slice(0,e.length),c=n,u=[],i=0,l="",h=[],d=[],f=0,p=s.length;f<p;f+=1){i+=1;var m=t(l+=s[f]);if(h.push(m),d.push(r(m)),o(i,c,s,f)){var v=d.lastIndexOf(!0),y=a(h,v);v=y.foundIndex,u.push(y.token),f-=i-1-v,i=0,l="",h=[],d=[]}}return u}}])},e.exports=o()}])},e.exports=o()},function(e,n){}]);