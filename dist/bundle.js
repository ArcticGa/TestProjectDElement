(()=>{var e={768:()=>{const e=document.getElementById("popup"),t=document.getElementById("button"),s=document.getElementById("close"),o=document.querySelector(".popup-content__success"),r=document.body;t.addEventListener("click",(function(){e.classList.add("visible"),r.classList.add("lock")})),s.addEventListener("click",(function(){e.classList.remove("visible"),setTimeout((()=>{r.classList.remove("lock")}),400)})),document.addEventListener("click",(function(t){t.target===e&&(e.classList.remove("visible"),setTimeout((()=>{o.classList.remove("visible"),r.classList.remove("lock")}),400))}))},220:()=>{const e=document.getElementById("form"),t=document.querySelector(".popup-content__success");e.addEventListener("submit",(function(e){e.preventDefault(),0===function(){let e=0;return s.forEach((t=>{!function(e){e.previousElementSibling.classList.remove("error-label"),e.classList.remove("error")}(t),t.classList.contains("_email")?function(e){return/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(e.value)}(t)||(o(t),e++):""==t.value&&(o(t),e++)})),e}()&&(t.classList.add("visible"),s.forEach((e=>{e.value=""})))}));let s=document.querySelectorAll("._req");function o(e){e.previousElementSibling.classList.add("error-label"),e.classList.add("error")}}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(768),s(220)})()})();