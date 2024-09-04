// alert("Welcome to my page");

let birthdayYear = 1988;
let birthMonth = "Septemeber"

let myName = "Angel"

console.log('My name is ', myName + 'and I was born in', birthMonth + 'of the year', birthdayYear);

let turtleAgeInHumanYears = 15;

let turtleName = "Shabby";

let isTurtleFriendly = true;

let turtleFoods = ["seaweed", "jellyfish", "algae"];

let turtleDetails = {
    name: turtleName,
    age: turtleAgeInHumanYears,
    isTurtleFriendly: isTurtleFriendly,
    favoriteFoods: turtleFoods
};

let currentNumber =0;

// function describeTurtle() {
//     let description = turtleName + " is " + turtleAgeInHumanYears + " years old in human years. ";
//     description += isTurtleFriendly ? "Shelly is friendly." : "Shelly is not friendly.";
//     console.log(description);
//     // document.getElementById('myMessage').innerText = description;
// }
function describeTurtle(){
    let description = turtleName + " is " + turtleAgeInHumanYears + " years old in human years. ";
    if (description =+ isTurtleFriendly){
        console.log('Shelly is friendly')
    }else{
        console.log('Shelly is not friendly')
    }

    if(currentNumber < 50 ){
        currentNumber += 1;
        document.getElementById('numberDisplay').innerText = currentNumber;
    } else {
        document.getElementById('numberDisplay').innerText = "Reached the maximum number of 50.";
    }

};

let seaTurtlesTotal = 20;
let landTurtlesTotal = 40;
let allTurtlesBeCute = "true"

console.log(seaTurtlesTotal + landTurtlesTotal)
!allTurtlesBeCute ? console.log("Oh No") : console.log('yeay');