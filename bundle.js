(()=>{"use strict";var t={314:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,':root {\n\t--background: #007af7;\n\t--white-text: #fff;\n\t--hover-text: #222;\n\t--button-background: #fff;\n\t--button-background-hover: #000;\n\t--button-text: #007af7;\t\n}\n\n*, *::after, *::before {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;\n}\n\n.cookie-consent {\n\tdisplay: flex;\n\talign-content: center;\n\talign-items: center;\n\tpadding: 1rem 2rem;\n\tbackground: var(--background);\n\tcolor: var(--white-text);\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tfont-size: 1rem;\n\tgap: 2rem;\n\topacity: 1;\n\tvisibility: visible;\n\tflex-wrap: wrap;\n}\n\n.cookie-consent.hide {\n\topacity: 0;\n\tvisibility: hidden;\n}\n\n.cookie-consent a {\n\tcolor: var(--white-color);\n}\n\n.cookie-consent a:hover {\n\tcolor: var(--hover-text);\n}\n\n.cookie-consent__text {\n\tflex: 8 768px;\n}\n\n.cookie-consent__button {\n\tdisplay: block;\n\tflex: 1 150px;\n\tbackground: var(--button-background);\n\tcolor: var(--button-text);\n\tborder: none;\n\tpadding: 0.4rem 1.2rem;\n\tcursor: pointer;\n\tborder-radius: 20px;\n\tfont-size: 1rem;\n}\n\n.cookie-consent__button:hover {\n\tbackground: var(--button-background-hover);\n\t\tcolor: var(--white-text);\n}',""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=o.base?s[0]+o.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=o(t,r),u=0;u<a.length;u++){var l=n(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),l=n.n(u),d=n(589),p=n.n(d),f=n(314),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;localStorage.getItem("cookie_accept")?document.querySelector(".cookie-consent").style.visibility="hidden":document.querySelector(".cookie-consent__button").addEventListener("click",(function(t){t.target.offsetParent.style.visibility="hidden",localStorage.setItem("cookie_accept","true")}))})()})();