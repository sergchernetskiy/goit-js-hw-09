!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},e=null;t.btnStop.disabled=!0,t.btnStart.addEventListener("click",(function(){t.btnStop.removeAttribute("disabled"),t.btnStart.disabled=!0,e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.removeAttribute("disabled"),t.btnStop.disabled=!0,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.ff57bbc2.js.map
