const details = {
    userName : "Aryan",
    age: 24,
    loginCount: 5,
    Single : true,

    getUserDetails: function()
    {
        console.log(`${this.userName} is a celebrity`)//Aryan is a celebrity
        console.log(this);
/*    |->this contain.. 
  userName: 'Aryan',
  age: 24,
  loginCount: 5,
  Single: true,
  getUserDetails: [Function: getUserDetails]
        */
    }
 }
 console.log(details.userName);// aryan
 console.log(details.getUserDetails());// error --> if not use "this"keyword


 function User(userName ,Single,loginCount)
 {
    this.userName = userName;
    this.Single = Single;
    this.loginCount = loginCount;

    return this;
 }

 const userOne = new User("raghu",15,true);
 console.log(userOne)
//User { userName: 'raghu', Single: 15, loginCount: true }

