class Player {
    constructor(fullName) {
        this.fullName = fullName;
        this.hand = []; // how many cards the player has in his hand
        this.points = 0;// how many points does the player have
    }
    //the player has 26 cards and points
    describe() {
        console.log(`${this.fullName} has ${this.card} and ${this.points} points}`);
    }

}

class Card {
    constructor(name, value, suit) {
        this.name = name; // name can be A J Q or K
        this.value = value; // how much is it worth 1, 2, ...10
        this.suit = suit; // cards can be heart, diamond, spade, clubs

    }
}

//create deck of cards and adding all the cards into this.cards array
class Deck {
    constructor() {
        this.cards = [];

        // For loop is to create the suit of cards: heart, diamond, spade and clubs

        for (let i = 0; i < 4; i++) {
            let suit = ""
            if (i === 0) {
                suit = "heart";
            } else if (i === 1) {
                suit = "diamond"
            } else if (i === 2) {
                suit = "spade"
            } else if (i === 3) {
                suit = "clubs"
            }

            //adding all the cards 
            this.cards.push(new Card("A", 1, suit), new Card("J", 11, suit), new Card("Q", 12, suit), new Card("K", 13, suit),
                new Card(2, 2, suit), new Card(3, 3, suit), new Card(4, 4, suit), new Card(5, 5, suit),
                new Card(6, 6, suit), new Card(7, 7, suit), new Card(8, 8, suit), new Card(9, 9, suit), new Card(10, 10, suit))
        }
    }
    //shuffle the cards
    shuffle() {

        for (let i = 0; i < this.cards.length; i++) {
            //pick random card between 0 and length of deck of cards
            //the following formula Math.floor is rounding the number down
            //since Math.random will be a decimal number bet zero and one.
            // First we multiply for example, 0.3*52 cards=15.6, rounding it to 15
            //the 15th card (random card) that is in this.card[shuffle] will be 
            // placed in this.cards[i] which is the deck of cards

            let shuffle = Math.floor(Math.random() * (this.cards.length)); //create a random number
            // swap cards

            let temp = this.cards[i]; // take one card and place it in a temporary place
            this.cards[i] = this.cards[shuffle]; // we pick a random card and place it into deck of cards
            this.cards[shuffle] = temp; // the card that in a temporary place will be reassigned 
            // to the random spot 

        }
        //every player receives 26 cards

    }
    //Dealing (giving) the cards to the players
    deal(player1, player2) {
        for (let i = 0; i < this.cards.length; i++) {
            if (i % 2 === 0) {
                player1.hand.push(this.cards[i]); //for even number- player1 get a card
            }
            else {
                player2.hand.push(this.cards[i]);// for odd number-player2 get a card

            }
        }

    }


}


class PlayGame {
    // games() {
    //   let Player-1 = new Player()
    //  }
    //counting the points for each player -
    //if cards' values are higher at player1 - one point is added to Player1 
    // or if cards' values are higher at player2- one point is added to player2 

    countingPoints(player1, player2) {
        for (let i = 0; i < 26; i++) {
            if (player1.hand[i].value > player2.hand[i].value) {
                player1.points += 1;
            }
            else if (player1.hand[i].value < player2.hand[i].value) {
                player2.points += 1;
            }


        }

        //here we check who has the higher points - win the game
        // Ties - result in zero points for both players

        console.log("player1: " + player1.points, "player2: " + player2.points);

        if (player1.points > player2.points) {
            console.log("player1 is the winner");
        }
        else if (player1.points < player2.points) {
            console.log("player2 is the winner");
        }
        else {
            console.log("Ties result in zero points for both players");
        }

    }
    //calling the functions:

    runningGame() {
        let s = new Player("Steve Martin");
        let t = new Player("Tom Sawyer");
        let d = new Deck();
        d.shuffle();
        d.deal(s, t);
        this.countingPoints(s, t);



    }
}
let game = new PlayGame();
game.runningGame();

