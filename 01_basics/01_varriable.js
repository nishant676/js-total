const accountId = 144553;
let accountEmail = "nishat145@gmail.com";
var accountPassword = "12345"
accountType = "Saving"

let accountState;
//accountId = 12; ---> cause const <can't re assign>

// ----ReAssigning Value -----
accountEmail = "nm@gmail.com"
accountPassword = "956";
accountType = "current"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountType);

// print all at once means in tabular format 
console.table([accountEmail,accountId,accountPassword,accountType,accountState])

console.log("Nishant");

/*
-------conclusion------
Prefer Not use Var cause Of issue in block scope & functional scope
*/