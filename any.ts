//any keyword which is used to get away from the typescript syntax

//any
let hero;
function getHero(){
    return 'thor'
}

//any keyword turns off typechecking in typescript
//if typescript does not know what is going to come in the value than it declares it as a any variable
hero = getHero()