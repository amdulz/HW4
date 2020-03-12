let deck = {

	cardArray:[],

	load: function(){



		let suitCounter = 1;
		let rankCounter = 1;

		for(suitCounter = 1; suitCounter < 5; suitCounter++){
			for(rankCounter =1; rankCounter < 15; rankCounter++){
				this.cardArray.push(new Card(suitCounter, rankCounter));
			}
		}
	}


}