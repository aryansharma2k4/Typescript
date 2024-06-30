const user = {
    name: "Aryan",
    email: "aryan@gmail.com",
    isActive: false
}

function createUser({name: string, isPaid: boolean}){}


createUser({name: "aryan", isPaid: false})


//by using :{} this tell that the return type of the function is a object and you can also put the items also inside the object that tell that the object that is returned should contain those data members
function createCourse():{name: string, price: number}{
    return {name: "typescript", price : 100}
}

//type aliases
//it mean that we create a type of object which contains certain data members which are going to be used more than once than we can define a user and it can used instead of writing the entire object

//similar to it is interface whose use case is also the same but the only difference is that type alias is not modifiable after making which interface can be modified
type User = {
    name: string,
    email: string,
    isActive: boolean
}


function cUser(user: User): User{
    return {name: "", email: "", isActive: false}
}

cUser({name: "", email: "", isActive : true})

//the readonly keyword is used when you want something to not change it anywhere in the code

type user = {
    readonly _id : string,
    name: string,
    email : string,
    isActive : boolean
}

let myUser: user = {
    _id : "1234",
    name: "h",
    email: "h@h.com",
    isActive : false
}

//now my user has a read-only on the data member _id so now no one can change the id 
type cardNumber = {
    n: string,
}

type cardDate = {
    cardDate: string
}


//ambersand(&) sign is used when you want to use two exsisting types in one 
type cardDetails = cardNumber & cardDate & {
    cvv: number
}




export {}