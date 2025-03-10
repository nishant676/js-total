class User{
    constructor(username){
        this.username = username;
    }


    logMe(){
        console.log(`UserName::${this.username}`);
    }

    static createId()
    {
        return `123`;
    }
}

const nimish = new User("nimish");
nimish.logMe();//UserName::nimish
// console.log(nimish.createId()); // error method is static

class Teacher extends User{
    constructor(username,email)
    {
        super(username);
        this.email = email;
    }

} 

const samsung = new Teacher("Samsung","samsung@gmail")
samsung.logMe();//UserName::Samsung
console.log(User.createId());//123