let barisdua = document.querySelector('h2');
barisdua.textContent = 'Hai World';

let iceCream = 'chocolate';
if(iceCream === 'keju') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

  document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/sanul.jpg') {
      myImage.setAttribute ('src','img/header.jpg');
    } else {
      myImage.setAttribute ('src','img/sanul.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }


for (let number= "#"; number.length <=7; number +="#"){
    console.log(number);
}

for (let number =1; number<= 20; number +=1) {
    if (number % 3 == 0 && number %5 == 0){
    console.log(number+" FizzyBuzz")
    } else if (number % 3 ==0) {
        console.log(number+" Fizz")
    } else if (number %5 ==0){
        console.log(number+" Buzz")
    }
    else{
    console.log(number)}
}


for (let i=1; i <= 8; i += 1) {
    if (i % 2 == 0) {
        let a = ""
        for (let number = "#"; number.length <=12;) {
            if (number.length % 2 == 0) {
                number += "#"
            } else {
                number += " "
            }
            a= number
        }
        console.log(a)
    } else {
        let a = ""
        for (let number = ""; number.length <= 12;) {
            if (number.length % 2 == 0) {
                number += " " 
            } else {
                number += "#"
            }
            a = number
        }
        console.log(a)
    }
}