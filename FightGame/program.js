document.addEventListener("DOMContentLoaded", function () {

	document.getElementById("next").style.visibility = "hidden";


	let playerArray = [];
	let computerArray = [];
	let PlayerScore = 0;
	let ComputerScore = 0;
	let TurnNumber = 0;

	document.getElementById("deal").addEventListener("click", function ()  {


		deck.load();
		let i;
		let random;
		for(i =0; i <26;i++){ 

			random = Math.floor(Math.random() * (52));
			while (deck.cardArray[random].inuse === true){
				random = Math.floor(Math.random() * (52));

			}
		

			playerArray[i] = deck.cardArray[random];
			deck.cardArray[random].inuse = true;

			
			random = Math.floor(Math.random() * (52));
			while (deck.cardArray[random].inuse === true){
				random = Math.floor(Math.random() * (52));

			}

			
			computerArray[i] = deck.cardArray[random];
			deck.cardArray[random].inuse = true;
		}

		console.log(playerArray);
		console.log(computerArray);
		document.getElementById("deal").style.visibility = "hidden";
		document.getElementById("next").style.visibility = "visible";

	})




	document.getElementById("next").addEventListener("click", function() {


		console.log("PLAYING CARDS FOR TURN #" + TurnNumber);

		
		document.getElementById("PlayersCard").innerText = ' ' + playerArray[TurnNumber].getRank() + ' ' + playerArray[TurnNumber].getSuit();
		if(playerArray[TurnNumber].getSuit() == 'HEART' || playerArray[TurnNumber].getSuit() == 'DIAMOND') {
			document.getElementById("PlayersCard").classList.add("red-card");
		}
		else {
			document.getElementById("PlayersCard").classList.remove("red-card");
		}

		
		document.getElementById("ComputerCard").innerText = ' ' + computerArray[TurnNumber].getRank() + ' ' + computerArray[TurnNumber].getSuit();
		if(computerArray[TurnNumber].getSuit() == 'HEART' || computerArray[TurnNumber].getSuit() == 'DIAMOND') {
			document.getElementById("ComputerCard").classList.add("red-card");
		}
		else {
			document.getElementById("ComputerCard").classList.remove("red-card");
		}





		if(playerArray[TurnNumber].rank > computerArray[TurnNumber].rank){

			PlayerScore++;
		}

		
		if(playerArray[TurnNumber].rank < computerArray[TurnNumber].rank){

			ComputerScore++;
		}

		document.getElementById("PlayerScore").innerText = PlayerScore;
		document.getElementById("ComputerScore").innerText = ComputerScore;

		if(++TurnNumber === 26) {
			if(PlayerScore > ComputerScore){
				document.getElementById("message").innerText = "Game Over You WON"
			}	
			if(PlayerScore < ComputerScore){
				document.getElementById("message").innerText = "Game Over You LOST"
			}	
			if(PlayerScore === ComputerScore){
				document.getElementById("message").innerText = "It's a TIE"
			}
			document.getElementById("next").style.visibility ="hidden";

			
		}


		

		

		document.getElementById("TurnNumber").innerText = TurnNumber;


	})
})
