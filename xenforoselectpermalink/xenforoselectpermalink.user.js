// ==UserScript==
// @name         xenForo - Select Permalink
// @namespace    http://openuserjs.org/users/ardiman
// @description  Selects whole permalink-code in xenForo-boards with one click.
// @description:de-DE Markiert in xenForo-Foren den gesamten Permalink-Code mit einem einfachen Klick.
// @grant        none
// @homepage     https://github.com/ardiman/userscripts/tree/master/xenforoselectpermalink
// @icon         https://raw.githubusercontent.com/ardiman/userscripts/master/scriptlogo.gif
// @include      http://xenforo.com/community/threads/*
// @include      http://www.xendach.de/threads/*
// @license      CC BY-NC-SA 3.0; https://creativecommons.org/licenses/by-nc-sa/3.0/
// @supportURL   https://github.com/ardiman/userscripts/issues
// @version      1.0.5
// @date         2014-11-21
// ==/UserScript==

$( document ).on( "click", "#bb_code_link_snippet,#html_link_code", function() {
  $(this).focus();
  $(this).select();
});
