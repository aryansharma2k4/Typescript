//initially arrays are defined as never in default so you need to use dataType[]
const superHeroes: string[] = []
superHeroes.push("ironman")

type User = {
    name : string,
    isActive : boolean
}

const allUsers : User[] = []
//now it makes allUsers a array of objects which are of type users

allUsers.push({name: "aryan", isActive: false})

//similarily you can make a arrays of array
const MLModels: number[][] = [
    [255,255],
    [1,1]
]

//union types
let score: number | string | boolean = 33
score = 44
score = "55"


