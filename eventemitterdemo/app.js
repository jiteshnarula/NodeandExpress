const eve = require('events');

const emitter = new eve.EventEmitter();

//registering the event using add listener
//i can use on here also
emitter.addListener("message",(msg)=>{
    console.log("Inside that event",msg)
})

emitter.emit("message",{id:1,name:"Jitesh"});