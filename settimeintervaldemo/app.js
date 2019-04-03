var count=0; 
  
var counter = setInterval((msg)=>{
    if(count>=5){
        clearInterval(counter);
     }else{
         console.log(msg +count);
         count++;
     }
 },1000,"Hello")