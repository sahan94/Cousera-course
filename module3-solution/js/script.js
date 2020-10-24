

(function (a) {
  console.log(a + " I want to see the global scope! Let me out!") ;
 })("sahan");


 (function(window) {
 var obj = {};
  obj.dreamOn = function () {
  console.log("I want to see the global scope! Let me out!")
 };
  window.doer = obj;
 });
 doer.dreamOn();

