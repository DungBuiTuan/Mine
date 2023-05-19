"use strict";
module.exports = class Queue{
    constructor(){
        this.items={};
        this.front=null;
        this.back=null;
    }

    enqueue(){
        this.items.push(Element);
    }

    dequeue(){
        if(this.items.length==0){
            return null;
        }else {
            return this.items.shift();
        }
    }

    peek(){
        if(this.items.length==0){
            return null;
        }else {
            return this.items[0];
        }
    }

    isEmpty(){
        
    }
}