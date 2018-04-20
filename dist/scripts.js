!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t(1),t(3)},function(e,n,t){"use strict";var r=t(2),o=document.querySelector("#inputBox"),a=document.querySelector("#outputBox"),u=document.querySelector("#fromScheme"),s=document.querySelector("#toScheme"),c=document.querySelectorAll(".copy-button"),i=document.querySelector("#snackbar"),l=r.vTranslit.getAvailableSchemes(),f=function(){};l.forEach(function(e){"Itrn"!==e.code?u.options[u.options.length]=new Option(e.name,e.code):u.options[u.options.length]=new Option(e.name,e.code,!0,!0)});var d=function(e){i.className="show",i.textContent=e;setTimeout(function(){i.className=i.className.replace("show","")},3e3)},p=function(e,n){var t=n.options[n.selectedIndex].text;d("The "+e+" is changed to '"+t+"'.")},h=function(){"Itrn"===u.value&&s.length<l.length?(s.options.length=0,l.forEach(function(e){"Itrn"!==e.code&&(s.options[s.options.length]=new Option(e.name,e.code))})):(s.options.length=0,s.options[0]=new Option("ITRANS","Itrn")),v()},v=function(e){f=r.vTranslit.init(u.value,s.value),e&&(p("to-scheme",s),m())},m=function(){return a.value=f(o.value)};u.addEventListener("change",function(){h(),p("from-scheme",u),m()}),s.addEventListener("change",v),c.forEach(function(e){return e.addEventListener("click",function(e){!function(e){e.value?(e.select(),document.execCommand("Copy"),d("Selected text is copied.")):d("There is nothing to copy!")}(document.querySelector(e.target.dataset.clipTarget))})}),o.addEventListener("keyup",m),window.addEventListener("DOMContentLoaded",h)},function(e,n,t){var r;"undefined"!=typeof self&&self,r=function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.vTranslit=void 0;var r=t(1),o=t(2),a=t(3),u=t(4),s=t(5),c=t(6);n.vTranslit={getAvailableSchemes:r.getAvailableSchemes,init:function(e,n){var t=(0,r.getScheme)(e),i=(0,r.getScheme)(n),l=(0,o.makeFromSchemeTree)(t),f=l.fromSchemeTree,d=l.maxTokenLength,p=(0,o.makeToSchemeTree)(i);return function(e){var n=(0,c.vTokenize)(e,d,(0,a.getCharDetails)(f)),t=(0,u.processTokens)(n,f,i),r=t.processedTokens,o=t.tokensType;return(0,s.translitTokens)(r,o,p).join("")}}}},function(e,n,t){var r;"undefined"!=typeof self&&self,r=function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.vTranslitSchemes=void 0;var r=t(1);n.vTranslitSchemes={getAvailableSchemes:r.getAvailableSchemes,getScheme:r.getScheme,schemes:r.schemes}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getScheme=n.getAvailableSchemes=n.schemes=void 0;var r=c(t(2)),o=c(t(3)),a=c(t(4)),u=c(t(5)),s=c(t(6));function c(e){return e&&e.__esModule?e:{default:e}}var i=n.schemes=[r.default,o.default,a.default,u.default,s.default];n.getAvailableSchemes=function(){var e=[];return i.forEach(function(n){e.push({code:n.about.schemeCode,name:n.about.schemeName})}),e},n.getScheme=function(e){var n=i.find(function(n){return n.about.schemeCode===e});if(n)return n;throw new Error("No Scheme found with the given schemeCode: '"+e+"'")}},function(e,n,t){var r;"undefined"!=typeof self&&self,r=function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.vTranslitDevaScheme={about:{schemeCode:"Deva",schemeName:"Devanagari",type:"brahmic"},data:{ayogavaha:["ं","ः"],consonants:["क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","","प","फ","ब","भ","म","य","र","","ल","ळ","","व","श","ष","स","ह"],deadConsonants:["क्","ख्","ग्","घ्","ङ्","च्","छ्","ज्","झ्","ञ्","ट्","ठ्","ड्","ढ्","ण्","त्","थ्","द्","ध्","न्","","प्","फ्","ब्","भ्","म्","य्","र्","","ल्","ळ्","","व्","श्","ष्","स्","ह्"],symbols:["०","१","२","३","४","५","६","७","८","९","।","॥","ॐ","ऽ","ँ"],vowelMarks:["","ा","ि","ी","ु","ू","ृ","ॄ","ॢ","ॣ","","े","ै","","ो","ौ"],vowels:["अ","आ","इ","ई","उ","ऊ","ऋ","ॠ","ऌ","ॡ","","ए","ऐ","","ओ","औ"]}}}]).vTranslitDevaScheme},e.exports=r()},function(e,n,t){var r;"undefined"!=typeof self&&self,r=function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.vTranslitItrnScheme={about:{schemeCode:"Itrn",schemeName:"ITRANS",type:"roman"},data:{ayogavaha:[["M",".m"],["H",".h"]],consonants:["ka","kha","ga","gha",["~Na","N^a"],"cha","Cha","ja","jha",["~na","JNa"],"Ta","Tha","Da","Dha","Na","ta","tha","da","dha","na","^na","pa","pha","ba","bha","ma","ya","ra","Ra","la","La","zha",["va","wa"],"sha",["Sha","Sa","shha"],"sa","ha"],deadConsonants:["k","kh","g","gh",["~N","N^"],"ch","Ch","j","jh",["~n","JN"],"T","Th","D","Dh","N","t","th","d","dh","n","^n","p","ph","b","bh","m","y","r","R","l","L","zh",["v","w"],"sh",["Sh","S","shh"],"s","h"],symbols:["0","1","2","3","4","5","6","7","8","9","|","||",["OM","AUM"],".a",".N"],vowelMarks:["a",["A","aa"],"i",["I","ii"],"u",["U","uu"],["RRi","R^i"],["RRI","R^I"],["LLi","L^i"],["LLI","L^I"],"e","E","ai","o","O","au"],vowels:["a",["A","aa"],"i",["I","ii"],"u",["U","uu"],["RRi","R^i"],["RRI","R^I"],["LLi","L^i"],["LLI","L^I"],"e","E","ai","o","O","au"]}}}]).vTranslitItrnScheme},e.exports=r()},function(e,n,t){var r;"undefined"!=typeof self&&self,r=function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.vTranslitKndaScheme={about:{schemeCode:"Knda",schemeName:"Kannada",type:"brahmic"},data:{ayogavaha:["ಂ","ಃ"],consonants:["ಕ","ಖ","ಗ","ಘ","ಙ","ಚ","ಛ","ಜ","ಝ","ಞ","ಟ","ಠ","ಡ","ಢ","ಣ","ತ","ಥ","ದ","ಧ","ನ","","ಪ","ಫ","ಬ","ಭ","ಮ","ಯ","ರ","ಱ","ಲ","ಳ","","ವ","ಶ","ಷ","ಸ","ಹ"],deadConsonants:["ಕ್","ಖ್","ಗ್","ಘ್","ಙ್","ಚ್","ಛ್","ಜ್","ಝ್","ಞ್","ಟ್","ಠ್","ಡ್","ಢ್","ಣ್","ತ್","ಥ್","ದ್","ಧ್","ನ್","","ಪ್","ಫ್","ಬ್","ಭ್","ಮ್","ಯ್","ರ್","ಱ್","ಲ್","ಳ್","","ವ್","ಶ್","ಷ್","ಸ್","ಹ್"],symbols:["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯","।","॥","","ಽ","ಁ"],vowelMarks:["","ಾ","ಿ","ೀ","ು","ೂ","ೃ","ೄ","","","ೆ","ೇ","ೈ","ೊ","ೋ","ೌ"],vowels:["ಅ","ಆ","ಇ","ಈ","ಉ","ಊ","ಋ","","ಌ","","ಎ","ಏ","ಐ","ಒ","ಓ","ಔ"]}}}]).vTranslitKndaScheme},e.exports=r()},function(e,n,t){var r;"undefined"!=typeof self&&self,r=function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.vTranslitTamlScheme={about:{schemeCode:"Taml",schemeName:"Tamil",type:"brahmic"},data:{ayogavaha:["ஂ","ஃ"],consonants:["க","","","","ங","ச","","ஜ","","ஞ","ட","","","","ண","த","","","","ந","ன","ப","","","","ம","ய","ர","ற","ல","ள","ழ","வ","ஶ","ஷ","ஸ","ஹ"],deadConsonants:["க்","","","","ங்","ச்","","ஜ்","","ஞ்","ட்","","","","ண்","த்","","","","ந்","ன்","ப்","","","","ம்","ய்","ர்","ற்","ல்","ள்","ழ்","வ்","ஶ்","ஷ்","ஸ்","ஹ்"],symbols:["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯","","","ௐ","",""],vowelMarks:["","ா","ி","ீ","ு","ூ","","","","","ெ","ே","ை","ொ","ோ","ௌ"],vowels:["அ","ஆ","இ","ஈ","உ","ஊ","","","","","எ","ஏ","ஐ","ஒ","ஓ","ஔ"]}}}]).vTranslitTamlScheme},e.exports=r()},function(e,n,t){var r;"undefined"!=typeof self&&self,r=function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.vTranslitTeluScheme={about:{schemeCode:"Telu",schemeName:"Telugu",type:"brahmic"},data:{ayogavaha:["ం","ః"],consonants:["క","ఖ","గ","ఘ","ఙ","చ","ఓ","జ","ఝ","ఞ","ట","ఠ","డ","ఢ","ణ","త","థ","ద","ధ","న","","ఢ","ణ","బ","భ","మ","య","ర","ఱ","ల","ళ","","వ","శ","ష","స","హ"],deadConsonants:["క్","ఖ్","గ్","ఘ్","ఙ్","చ్","ఓ్","జ్","ఝ్","ఞ్","ట్","ఠ్","డ్","ఢ్","ణ్","త్","థ్","ద్","ధ్","న్","","ప్","ణ్","బ్","భ్","మ్","య్","ర్","ఱ్","ల్","ళ్","","వ్","శ్","ష్","స్","హ్"],symbols:["౦","౧","౨","౩","౪","ౣ","౬","౭","౦","౯","।","॥","","ఽ","ఁ"],vowelMarks:["","ా","ి","ీ","ు","ూ","ృ","ౄ","","","ె","ే","ై","ొ","ృ","ౌ"],vowels:["అ","ఆ","ఇ","ఀ","ఉ","ఊ","ః","","ఌ","","ఎ","ఏ","ఐ","ఒ","ఓ","ఔ"]}}}]).vTranslitTeluScheme},e.exports=r()}]).vTranslitSchemes},e.exports=r()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return Array.isArray(e)?e[0]:e},o=function(e,n,t,r,o,a){e&&(r[e]={aksharaIndex:o+"#"+n,alternateIndex:t,char:e,type:o},a.push(e.length))},a=function(e,n,t){var r={};return"roman"===e.about.type&&"consonants"===n?r:(e.data[n].forEach(function(e,a){Array.isArray(e)?e.forEach(function(e,u){o(e,a,u,r,n,t)}):o(e,a,0,r,n,t)}),r)},u=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o={};return e.data[n].forEach(function(a,u){!function(e,n,t,o,a,u){var s={char:{},type:a};if(u){var c=t.data[u][n];s.char[u]=r(c)}s.char[a]=r(e),o[a+"#"+n]=s}(a,u,e,o,n,t)}),o};n.makeFromSchemeTree=function(e){var n=[];return{fromSchemeTree:Object.assign({},a(e,"deadConsonants",n),a(e,"consonants",n),a(e,"vowels",n),a(e,"vowelMarks",n),a(e,"ayogavaha",n),a(e,"symbols",n)),maxTokenLength:Math.max.apply(Math,n)}},n.makeToSchemeTree=function(e){var n={};return n=Object.assign({},n,u(e,"deadConsonants","consonants"),u(e,"consonants","deadConsonants"),u(e,"vowels","vowelMarks"),u(e,"vowelMarks","vowels"),u(e,"ayogavaha"),u(e,"symbols"))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.getCharDetails=function(e){return function(n){var t=e[n];return" "===n?{char:n,type:"pause"}:"_"===n?{char:n,type:"skip"}:t||{char:n,type:"unknown"}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.processTokens=function(e,n,t){for(var r=e.slice(),o=[],a=0;a<r.length;a+=1){var u=r[a],s=a<r.length-1?r[a+1]:{type:"strEnd"},c=a>0?r[a-1]:{type:"strStart"},i=u.type;"brahmic"===t.about.type?"deadConsonants"===i&&"vowelMarks"===s.type?i="consonants":"vowels"===i&&"deadConsonants"===c.type?i="vowelMarks":"vowelMarks"===i&&"deadConsonants"!==c.type&&(i="vowels"):"roman"===t.about.type&&"consonants"===i&&"vowelMarks"===s.type&&(i="deadConsonants"),o.push(i)}return{processedTokens:r,tokensType:o}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.translitTokens=function(e,n,t){var r=[];return e.forEach(function(e,o){var a=n[o];"unknown"===a?r.push(e.char):"pause"===a?r.push(e.char):"skip"===a?r.push(""):r.push(t[e.aksharaIndex].char[a])}),r}},function(e,n,t){var r;"undefined"!=typeof self&&self,r=function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,n,t,r){return e===n||r===t.length-1},o=function(e,n){return n>-1?{foundIndex:n,token:e[n]}:{foundIndex:0,token:e[0]}},a=function(e){return"unknown"!==e.type};n.vTokenize=function(e,n,t){for(var u=e.slice(0,e.length),s=n,c=[],i=0,l="",f=[],d=[],p=0,h=u.length;p<h;p+=1){i+=1;var v=t(l+=u[p]);if(f.push(v),d.push(a(v)),r(i,s,u,p)){var m=d.lastIndexOf(!0),y=o(f,m);m=y.foundIndex,c.push(y.token),p-=i-1-m,i=0,l="",f=[],d=[]}}return c}}])},e.exports=r()}])},e.exports=r()},function(e,n){}]);