import * as testmodule from '../module.js';
let val = testmodule.hello();  // val is "Hello";

function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
    callback(this.responseText) 
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}

export function getUsefulContents(url) {
  //CACA
}