function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");const l=document.querySelector(".form");let u=Number(l.delay.value.trim());const s=Number(l.step.value.trim()),a=Number(l.amount.value.trim());function c(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i&&o({position:e,delay:t}),n({position:e,delay:t})}),t)}))}l.addEventListener("submit",(function(e){e.preventDefault();for(let e=0;e<a;e+=1){c(e+1,u).then(d).catch(f),u+=s}}));const d=({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{position:"center-center",useIcon:!1,opacity:.7})},f=({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{position:"center-center",useIcon:!1,opacity:.7})};
//# sourceMappingURL=03-promises.b96345b7.js.map
