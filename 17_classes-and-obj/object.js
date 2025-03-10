

function createUser (username, score)
{
    this.username = username;
    this.score = score
}


createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const cofee =new createUser("cofee",36);
const tea =new createUser("tea",262);

cofee.printMe();