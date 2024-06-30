//with this you can only pass values of your data types in a function 
function addTwo(num: number){
    return num + 2;
}

addTwo(2)

function getUpper(val: string){
    return val.toUpperCase()
}

getUpper("aryan")


function signUp(name: string, email: string, password:boolean){}

signUp("aryan", "gmail", true)

//this generates a default value of false in isPaid so then there is no need to pass isPaid to it
let loginUser = (email:string, isPaid: boolean = false) => {}


//in this way we can typecheck what a function can return 
function getValue(myVal : number): boolean{
    if(myVal > 5){
        return true
    }
    return false
}


//this is how you can typecheck a arrow function in typescript
const getHello = (s: string):string => {
    return "aryan"
}



const heroes = ["thor", "ironman", "spiderman"]
heroes.map((hero):string => {
    return `hero is ${hero}`
})

//in this way we can assure this function remains a void functions and does not returns anything
function errorMsg(err:string): void{
    console.log(`this is the error message : ${err}`);
}

//the never keyword is used whenever you want to handle anysort of error in the program this mean function throws a exception or terminates the execution of the program
function handleError(errorMsg: string):never{
    throw new Error(errorMsg)
}
