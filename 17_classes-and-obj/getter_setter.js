class User{
    constructor (email,password)
    {
        this.email = email;
        this.password = password;
    }
    get password(){
      return  ` ${this._password}sonu`
    }
    set password(value){
        this._password = value;
    }
}

const sonu = new User("sonu23@gmail.com","123");
console.log(sonu.password)// 123sonu 