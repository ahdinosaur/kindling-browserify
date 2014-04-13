(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("./index.less"),document.querySelector("main").textContent="wooooo!";
},{"./index.less":2}],2:[function(require,module,exports){
var css="main {\n  text-align: center;\n}\n";require("lessify")(css),module.exports=css;
},{"lessify":4}],3:[function(require,module,exports){
module.exports=function(e,t){var l=t||document;if(l.createStyleSheet)l.createStyleSheet(e);else{var a=l.getElementsByTagName("head")[0],n=l.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(l.createTextNode(e)),a.appendChild(n)}},module.exports.byUrl=function(e){if(document.createStyleSheet)document.createStyleSheet(e);else{var t=document.getElementsByTagName("head")[0],l=document.createElement("link");l.rel="stylesheet",l.href=e,t.appendChild(l)}};
},{}],4:[function(require,module,exports){
module.exports=require("cssify");
},{"cssify":3}]},{},[1])