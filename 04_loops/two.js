const newTech={
    html:"Hyper text",
    css : "Cascardian style",
    js:"javaScript"

}
for (const key in newTech) {
    console.log(`${key} shortcut is for${newTech[key]}`);
}        
  /*
    o/p:- html shortcut is for Hyper text
    css shortcut is forCascardian style
    js shortcut is forjavaScript
  */  

  const program = ["js","c++","java","py"];
  
  for(const lang in program)
  {
    console.log(lang);//0 1 2 3
  }

  /*
    Diff betn for in & for of loop is:-
      => for of --> print value
      => for in ---> print index num
  */

      //In above e.g. if u want print value 

      for(const lang in program)
        {
          console.log(program[lang]);//js c++ java py
        } 

 /* 
    =>For obj use --> for in loop
    => for array -->  for of loop
 */