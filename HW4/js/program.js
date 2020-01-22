
function myStartFunction(){
	arr = [];
	for(let i = 0; i < 3; i++ ){
		arr.push(prompt('Enter a word' + (i+1)));
	}

	if(arr != null)
	{	
		let out = "<ul>"
		for(let i = 0; i <3; i++){
			out = out + "<li>" + arr[i] + "</li>"

		}
		out = out + "</ul>"
		document.getElementById("demo").innerHTML = out
		changeBtn.style.display = "block";
	}
	
}




const
    startBtn = document.querySelector("#start"),
	changeBtn = document.querySelector("#change");
	

let arr = [];







startBtn.addEventListener("click",myStartFunction,false);
changeBtn.addEventListener("click",startWordChange,false)
changeBtn.style.display = "none";

function startWordChange( ) {
	
	
	firstScreen.style.display = "none";
	secondScreen.style.display = "block";

	arr = arr.map(swapLetters);
	
	let out = "<ul>"
	for(let i = 0; i <3; i++){
		out = out + "<li>" + arr[i] + "</li>"

	}
	out = out + "</ul>"
	document.getElementById("demo2").innerHTML = out
	
	

}

function swapLetters(word){

	let first = word[0]
	let last = word[word.length - 1]
	let middle = word.substring(1,word.length -1)
	return last + middle + first;
}

	







