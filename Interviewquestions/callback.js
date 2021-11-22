function getNumber(cb){
    setTimeout(() => {
        cb(10);
    },1000)
}

getNumber((n)=>{console.log(n)});

/* Call back is like you go ahead and do the work and call me when it's done. 
That means  as long as you do I have nothing to show for it.
Ex: imagine u got to fast food center and u stand up at counter and u make an order 
so now a call back basically says is there are not going to give anything to represent that your 
waiting for burger but they will callback saying your burger is ready
Basically we are waiting for a callback from the 3rd line . once it call back saying like your burger ready then we will execute function and print results.
 */

//https://javascript.info/promise-basics