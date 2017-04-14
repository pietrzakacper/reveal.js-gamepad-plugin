(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var doc = document;

var date = new Date();
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var msg = "Today is " + weekDays[date.getDay()] + " and if you can see this message everything works properly.";

var $dialog = doc.querySelector(".dialog");

var cookie = doc.cookie.match(/([^=]+)=(.*)/);

if (cookie && cookie[2] !== "true") {
  $dialog.className = "dialog";
} else {
  doc.querySelector("#hello").innerHTML = "Hello there... again!";
}

doc.querySelector("#dialog-msg").innerHTML = msg;
doc.querySelector("#dialog-close").onclick = function () {
  $dialog.className = "dialog";

  if (doc.querySelector("#show-again").checked) {
    var exdays = 365;
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    doc.cookie = "showDialog=false; expires=" + date.toUTCString();
  }
};

doc.cookie = "asd=false; expires=" + date.toUTCString();

console.info(msg);

},{}]},{},[1])

//# sourceMappingURL=script.js.map
