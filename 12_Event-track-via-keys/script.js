const insert = document.getElementById('insert');
/*
    # Keyboard key click display in browser
    => in eventListner-->
        |-> (i)keypress:-
               => when u click element like a, b num then it will take it
               => depriciate already
               => special char cant not access like shift , alt
            (ii)Keydown:-
                => when click it will take the address and when u wnat to print it will print
                => mostly used
                => it can have access for enter , shift , alt etc
*/



window.addEventListener('keydown',(e)=>
{
    insert.innerHTML = `
    <div class = "color">
    <table>
    <tr>
        <th>key</th>
        <th>Keycode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key == ' '? 'Space' :e.key }</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>`
})