//iterating an array

let myTurtles = ["Box Turtle", "Softshell Turtles", "Freshewater Turtle", "Land Turtle"];
console.log(myTurtles[3]);
let myTurtle = 4

const myFavorite = 7;

//conditional statement
if (myTurtle < myFavorite){
    console.log("buy One ;-)!");
}else if(myTurtle === myFavorite){
    console.log("not for sale");
}else{
    console.log("sold out");
}

//Document Object Model

document.getElementById("myHeader").innerText = "Welcome to my Turtle Table";

document.getElementsByClassName("content")[0].style.color = "green";

let imgTag = document.getElementsByTagName("img")[0];
imgTag.setAttribute("turtle", "turtle.jpeg")

let newAttribute = document.createAttribute("src");
newAttribute.value = "turtle.jpeg";
imgTag.setAttributeNode(newAttribute);

document.getElementById("font").style.fontSize = "40px";


//Event listener
document.getElementById("myHeader").onclick = function() {
    alert("Header clicked")
}

document.getElementById("typesOfTurtles").addEventListener('click',() =>{
   this.innerText = "Clicked" 
});

let specialP = document.getElementById("font");
specialP.onclick = function(){
    specialP.innerHTML = "Hi I changed so can You!";
}

document.getElementById("font").onmouseover = function(){
    this.style.backgroundColor = "lightpink";
}

window.onload = function(){

}

//function and callin a function, accepting arguments and multiple arguments
function welcomePerson(humanName){
    console.log("Hello, " + humanName + "how are you?");
}
welcomePerson("Angel");

function calculateApples(numOne, numTwo, numThree){
    return numOne + numTwo + numThree;
}
console.log(calculateApples(3, 4, 2));


//while loop and forloop
let boxTurtles = 0;
while (boxTurtles < 6 ) {
    console.log("My Box Turtle is at" + boxTurtles)
    boxTurtles++;
};

for (let index = 0; index < 6; index++){
    console.log("Looping my Box turtles to: " + index );
}
//intervals Set interval and Set Timeouts to clear the intervals
const turtleFacts = [
    "Turtles are the most interesting creaters in the world",
    "Turtles are reptiles",
    "Turtles have existed for around 215 million years.",
    "Sea turtles can hod their breath for up to 5 hours.",
    "There are 356 species of turtles"
];

let factIndex = 0;
let loopCount = 0;
const maxLoops = 3;
function displayNextFact() {
   document.getElementById('turtleFactDisplay').innerText = turtleFacts[factIndex];
   factIndex = (factIndex + 1) % turtleFacts.length; 

   if (factIndex === 0){
    loopCount++;
   }
    if(loopCount === maxLoops){
        clearInterval(intervalId);
        console.log("Stopped displaying turtle facts after 3 loops.");
    }
};

const intervalId = setInterval(displayNextFact, 5000);