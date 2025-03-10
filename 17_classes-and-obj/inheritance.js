class User{
    constructor(username)
    {
        this.username = username;
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email,password)
    {
        super(username);
        this.email = email;
        this.password = password;
    }
    
    addCOurse(){
        console.log(`A new COurse was Added by ${this.username}`);
    }
}

const cofee =new Teacher("cofee","tea@gmail.com","123")
cofee.addCOurse();//A new COurse was Added by cofee
cofee.logMe();//UserName is cofee

const masalaTea = new User("MasalaChai");
masalaTea.logMe();//UserName is MasalaChai