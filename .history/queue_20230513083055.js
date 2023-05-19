"use strict";
module.exports = class Queue{
    constructor(){
        this.items={};
        this.first=0;
        this.last=0;
    }

    enqueue(){
        this.items[this.last]=this.items;
        this.last++;
    }
}