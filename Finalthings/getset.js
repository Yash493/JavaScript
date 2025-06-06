class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }


    //whenever use getter we have to use setter
    
    // and also getter and setter name should be same as property

    get email(){
        return `${this._email}@email.com`
    }

    set email(email){
        this._email=email;
    }


    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password=value;

        //we have to update password varibale here to ovveride contructor values


    }
}//class


const yash=new User('yash','abc');
console.log(yash.email)
console.log(yash.password)


