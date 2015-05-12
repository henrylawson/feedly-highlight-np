// ==UserScript==
// @match https://feedly.com/*
// @match http://feedly.com/*
// ==/UserScript==

var css = "div.selectedEntry div.recommendationInfo span, div.selectedEntry div.sourceInfo a, div.selectedEntry div a.title.read { font-weight:bold;color:black; } div.u0Entry.selectedEntry { border:2px solid black;background-color:#f9f9f9; }",
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);