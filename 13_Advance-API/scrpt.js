/*  (#) XMLHTTPREQUEST:-
        => used to interact with servers.
        => retrieve data from url witout having full pg refresh
        => it have readyState --5  

  value->  |0|--> UnSENT ---> client created but Open() not called yet.
  value->  |1|--> OPENED ---> Open()has called .
  value->  |2|--> HEADERS_RECIEVED ---> send()has called & headers and status avail  .
  value->  |3|--> LOADING ---> Downloading; |responseText| hold partial data .
  value->  |4|--> DONE ---> Operation complete.

  
*/

const xhr =  new XMLHttpRequest()
// open is used to send the request
// open  has 2 parameter--> (i)method[get/post] (ii) string (urls)
const url = 'https://api.github.com/users/nishant646'
xhr.open('GET',url, )
// open didnot call automatically u have to use ---> sent()
xhr.onreadystatechange = function()
{
    if(xhr.readyState === 4)
    {
        // typeCast to json --> same as object
        const data =JSON.parse (this.responseText)
        console.log(data.site_admin);
    }
    console.log(xhr.readyState);
}
xhr.send();
 
/* (#) readyState()--> used to check which state are u in like betn 0-5(mentioned above)
   (#) onreadystatechage--> continiously track state
                        => take function means when track what u want to do
   (#) responseText --> it will hold all the data present in the url
                    => from the data u can also take particular value like folower/ food etc
                    => but url store data in "String" format so, u have to typeCast
                    => url store diff kind of data here u cant  say parse into "object u have to parse into "JSON"
                    =>Use capital--> JSON.parse(variable)
*/