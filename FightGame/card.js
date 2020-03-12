let Card = function(pSuit, pRank) {

	this.suit = pSuit;
	this.rank = pRank;
	this.inuse = false;
}




Card.prototype.getRank = function() {
    
      switch(this.rank) {
        case 11:
          return 'Jack';
        case 12:
          return 'Queen';
        case 13:
          return 'King';
        case 14:
          return 'Ace';
        default: 
          return this.rank;
      }
    
}

Card.prototype.getSuit = function() {
  
    switch(this.suit) {
      case 1:
        return 'HEART';
      case 2:
        return 'DIAMOND';
      case 3:
        return 'SPADE';
      case 4:
        return 'CLUB';
      default: 
        return this.suit;
    }
  
}