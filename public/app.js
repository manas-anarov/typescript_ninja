"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, b, a) {
        this.client = c;
        this.details = b,
            this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes f" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = 'youshi';
invTwo.amount = 200;
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
console.log(type);
