//document.querySelector('html').onclick = function(){
//    alert('Ouch! Stop poking me!');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/banff.jpg') {
        myImage.setAttribute ('src', 'images/catsnme.jpg');
    } else {
        myImage.setAttribute('src', 'images/banff.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('What is your name?');
    if(!myName) {
        setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Getting to Know Caitlin Crawford,' + ' but nice to meet you ' + myName;
    }
}


if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Getting to Know Caitlin Crawford,' + ' but nice to meet you ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
  }