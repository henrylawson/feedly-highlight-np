// ==UserScript==
// @name         	Feedly NP Highlight
// @description   A simple userscript to highlight the row you are navigating using "n", "p" on feedly
// @icon          https://github.com/henrylawson/feedly-highlight-np/raw/master/feedly-np-highlight.user.jpg
//
// @author				Henry Lawson
// @namespace     https://github.com/henrylawson
// @downloadURL		https://github.com/henrylawson/feedly-highlight-np/raw/master/feedly-np-highlight.user.js
//
// @license       GPLv3 - http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright     Copyright (C) 2012, by Sepehr Lajevardi <me@sepehr.ws>
//
// @match 				https://feedly.com/*
// @match 				http://feedly.com/*
// 
// @version         1.0
// @updateURL				https://github.com/henrylawson/feedly-highlight-np/raw/master/feedly-np-highlight.user.js
//
// @run-at					document-start|document-end
// @unwrap
// ==/UserScript==
 
/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

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