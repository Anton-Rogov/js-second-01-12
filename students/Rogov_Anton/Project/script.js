"use strict";
class Ingrit {
    constructor(nam) {
        this.Name = this._inputRadio(name);
    }
_inputRadio (domElementName){
    return document.querySelector(`input[name="${domElementName}"]: checked`).value
}
inputCheck (domElementName){
    return document.querySelector(`input[name="${domElementName}"]: checked`).value
}
let burger =[];
let order = document.querySelector('# order');
order.addEventListener(click, addIngrid);

function addIngrid() {
    let newIngrit = new Ingrit('name');
    burger.push(newIngrit)
}