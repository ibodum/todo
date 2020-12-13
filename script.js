var button = document.getElementById('enter');
var input = document.getElementById("userinput");
var ul = document.querySelector('ul');
var dltbutton = document.getElementsByClassName("delete")[0];
var li = document.getElementsByTagName("li");
var h1= document.querySelector("h1");
var button1 = document.getElementsByClassName("button1")[0];
var button2 = document.getElementsByClassName("button2")[0];
var button3 = document.getElementsByClassName("button3")[0];
var button4 = document.getElementsByClassName("button4")[0];
var message = document.querySelector("h3");

var mesArray = ["do what ever your wife says, happy wife ,happy life :)", 
"ohh sh.t you spent all your money!",
"i wish i would not ever listen that fu.king voice!!!",
"which idoit sad money does  not bring happyness. idoit!!!",
"i love to spent moneyyyyyyyyyyyyyy ha ha ha ",
 "money money where is honey"]

function addeventtoall() {
	button1.addEventListener("click", function() {
	    var message1 = mesArray
	    const randomIndex = Math.round(Math.random()*mesArray.length);
	    message.textContent = mesArray[randomIndex]

	})
	button2.addEventListener("click", function() {
		var message2 = mesArray
		const randomIndex = Math.round(Math.random()*mesArray.length);
		message.textContent = mesArray[randomIndex]
	})
	button3.addEventListener("click", function() {
		var message3 = mesArray
		const randomIndex = Math.round(Math.random()*mesArray.length);
		message.textContent = mesArray[randomIndex]
	})
	button4.addEventListener("click", function() {
		var message4 = mesArray
		const randomIndex = Math.round(Math.random()*mesArray.length);
		message.textContent = mesArray[randomIndex]
	})
	
	}



addeventtoall();



function createListElement() {
		var li = document.createElement("li",);
	li.appendChild(document.createTextNode(input.value,));
	ul.appendChild(li);
	input.value = '';

	var button = document.createElement("button");
		button.appendChild(document.createTextNode("delete"));
		li.appendChild(button);


	    button.onclick=removeParent;

}
function underlineParent(e){
		event.target.parentNode.classList.toggle("done");
	}
function removeParent(e){
		event.target.parentNode.remove();
	} 

function inputLength() {
	return input.value.length
}

function addListAfterClick() {
	if(inputLength()> 0) {
	  createListElement() 
	}
}
function addListAfterKeypress(e){
	if(inputLength() > 0 && event.which === 13) {
	createListElement() 
    }
}
button1 = button.addEventListener("click", addListAfterClick);

button.addEventListener("click",addListAfterClick );
	
input.addEventListener("keypress", addListAfterKeypress);
