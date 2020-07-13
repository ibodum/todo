var button = document.getElementById('enter');
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var dltbutton = document.getElementsByClassName("delete")[0];
var li = document.getElementsByTagName("li");



function inputLength () {
	return input.value.length;
}



function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

		var button = document.createElement("button");
		button.appendChild(document.createTextNode("delete"));
		li.appendChild(button);

	    button.onclick=removeParent;
//THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREAT


	function underlineParent(event){
		event.target.parentNode.classList.toggle("done");
	}


	function removeParent(evt){
		evt.target.parentNode.remove();
	} 

}


function addListAterClick() {
	if (inputLength () > 0) {
		createListElement();

	}

}

function addListAfterKeyPres(e) {
	if (inputLength () > 0 && event.keyCode === 13) {
		createListElement();


	}
}



button.addEventListener("click", addListAterClick);

input.addEventListener("keypress",addListAfterKeyPres);
