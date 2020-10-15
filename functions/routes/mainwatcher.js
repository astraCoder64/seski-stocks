const express=require('express');
const axios=require('axios');
const EventEmitter=require("events");
const eventemitter= new EventEmitter();

const {watcher}=require('../utils/watcher');

eventemitter.setMaxListeners(50);

eventemitter.on('event',async()=>{
  watcher();
})

async function stockerpro(){
   setInterval(()=>{
    eventemitter.emit("event");
    eventemitter.setMaxListeners(eventemitter.getMaxListeners()+1);
  },5000);
}

exports.stockerpro=stockerpro;