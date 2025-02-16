// ADD ELEMENT

/*
    in <ul></ul> want to add more lists 
    <ul class="language">
        <li>Js</li>
    </ul>
    -> create a function to add

    function addOptiLang(langName)
    {
        // create element for "li"--> tag
        const li = document.createElement('li');

        // write text and append with list
        li.appendChild(document.createTextNode(langName))

        // append ur list with ul tag class name
        document.querySelector('.language.').appendChild(li);
    }

    addOptiLang("rubi"); // call func

*/

//---------------- EDit-------------------------

/*
    # REplace value :- via [repalceWith] using

    const secondLang =  document.querySelector("li:nth-child(2")

    const newLi = document.createElement('li');

    // submit value in that list 
    newLi.textContent = "Mojo"

    :- NOte :- No such diff betwn innerHTML & textConent

    :- Here u replacing value
    secondLang.replaceWith(newLi);


   =====================
   USING innerHTML:-
   
 const firstLang = document.querySelector("li:nth-child(1)")
firstLang.outerHTML = '<li> Spring</li>'
*/


//+++++++++++++++++++++++++++++++++++++++++

/*
    REMOVE:-

const lastLang = document.querySelector('li:last-child');
lastLang.remove();
*/