"use strict";
class flower {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    flowerdetails() {
        console.log("the name of the flower is " + this.name);
        console.log("the color of the flower is " + this.color);
    }
}
let flower1 = new flower("mariegold", "red");
let flower2 = new flower("rose", "pink");
flower1.flowerdetails();
flower2.flowerdetails();
class snacks {
    constructor(name, brand, batchNo, date) {
        this.name = name;
        this.brand = brand;
        this.batchNo = batchNo;
        this.date = date;
    }
    snacksinfo() {
        console.log("Delicious" + " " + this.name);
        console.log("brand name is" + " " + this.brand);
        console.log("batch number is" + " " + this.batchNo);
        console.log("expiry number is" + " " + this.date);
    }
}
let snacksdescrp1 = new snacks("shortbread", "Trader's Joe", 20, "05/12/2026");
let snacksdescrp2 = new snacks("cookies", "Portoos", 12, "05/18/2026");
snacksdescrp1.snacksinfo();
snacksdescrp2.snacksinfo();
