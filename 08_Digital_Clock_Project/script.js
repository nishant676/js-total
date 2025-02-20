const clock = document.querySelector('#clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);

// set Interval method used to represent time with changing dynamically
//=> setInterval()---> 2 parameter
            //      --> function() {} and time (1000/2000) 