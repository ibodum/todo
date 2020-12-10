var button = document.getElementById('enter');
var input = document.getElementById("userinput");
var ul = document.querySelector('ul');
var dltbutton = document.getElementsByClassName("delete")[0];
var li = document.getElementsByTagName("li");
var h1= document.querySelector("h1");

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

button.addEventListener("click",addListAfterClick );
	
input.addEventListener("keypress", addListAfterKeypress);
