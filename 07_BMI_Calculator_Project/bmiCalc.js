const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    // used suppose to be in form avoid method part == "post "/ "get"----> prevent from send data to server

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' ||  height <0 ||height === isNaN(height))
    {
        results.innerHTML = `Please enter valid height ${height}`;
    }
   else if(weight === '' || weight === isNaN(weight)|| weight <0)
    {
     results.innerHTML = `Please enter valid weight ${weight}`;
    }
    else
    {
        const bmi = (weight / ((height * height) /1000)).toFixed(2);
        // show result
        results.innerHTML = `<span>${bmi}</span>`;


        if(bmi >18.6)
        {
            results.innerHTML = `<span>UNder Weight</span>`
        }
        else if(bmi >24.9)
        {
         results.innerHTML = `<span>Normal Weight</span>`
        }
        else if(bmi >24.9)
        {
        results.innerHTML = `<span>Over Weight</span>`
        }
    }
    
})