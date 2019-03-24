/** My Name */
var name='kat'

/** Number of States */
const states='50'

/** Adding Variables */
var add= 5 + 4;

/** sayHello function */
function sayHello() {
    alert ("Hello World!") ;
};
sayHello();

function checkAge(name,age){
   if (age<21){
    alert ("Sorry" + name + ", you aren't old enough to view this page!")
   }
};

checkAge('Charles',21);
checkAge('Abby',27);
checkAge('James',18);
checkAge('John',17);

var favoriteVeggies=['Carrots','Cucumbers','Celery','Bell Peppers','Corn'];

for(var i=0; i < favoriteVeggies.length; ++i) {
    console.log(favoriteVeggies[i]);
}

let friends = [
    {
        name: "Will",
        age: 25
    },
    {
        name: "Ford",
        age: 2
    },
    {
        name: "Alissa",
        age: 20
    },
    {
        name: "Lauren",
        age: 21
    },
    {
        name: "Isaiah",
        age: 30
    },
];

for (let i=0; i<friends.length; i++){
let x = friends[i].name
let y = friends[i].age
checkAge(x,y);
};

function getLength(store){
    return store.length;
};

let result=getLength("Hello World");

if (result %2===0){
    console.log("The world is nice and even!");
} 
else{
    console.log("The world is an odd place!");
}