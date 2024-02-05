//var can be declared, initialized and updated again and again.
var name = "Riya"
console.log("~~~First time declared with var and initialized:",name);
var name = "Aryan"
console.log("~~~Second time declared with var and initialized:",name);
name = "Arhaan"
console.log("~~~Updating Value declared with var:",name);

if(name){
    //let can be declared and initialized only once.
    //let can be updated again and again.
    let name = "Ziya"
    console.log("~~~Declared with let and initialized:",name);
    name = "Mahek"
    console.log("~~~Updating Value declared with let:",name);
}

//let is blocked scoped that is why it prints Arhaan which is declared by var the global scope keyword.
console.log("Checking value of name after using let keyword:",name);

if(name){
    //const can be declared, initialized only once.
    //const can't be updated again and again.
    const name = "Sanaya"
    console.log("~~~Declared with const and initialized:",name);
}

//const is blocked scoped
console.log("Checking value of name after using const keyword:",name);

//var is global scope.
name = "Arbaaz"
console.log("~~~Updating Value declared with var again:",name);