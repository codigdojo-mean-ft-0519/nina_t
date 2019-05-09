class Card{
    //suit, value and numValue are all local variables because they've been passed in through the function
    //Deck is actually going to be the one that creates our cards...so these values will come through the creation of the Deck.
    constructor(suit,value,numValue){
        //instance v = local v
        this.suit = suit;
        this.value = value;
        this.numValue= numValue;
    }
    show(){
        console.log(`This card is a ${this.value} of ${this.suit}.`);
    }
}

class Deck{
    constructor(){
        //Originally we had all of the code under "reset()" up in the Deck constructor...but ultimately both constructing a deck and resetting a deck are the same thing (i.e. giving us back 52 cards in order). 
        //Therefore, in the end we just put all the code for creating a deck in the reset function...
        //and upon creation of a new Deck, we decided to invoke the reset function. 
        this.reset();
    }
    reset(){
        //local variable because it's been declared here.
        const suits = ["Hearts", "Clubs", "Diamonds", "Spades"]
        const values = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack", "Queen","King"];
        const cards = [];
        //Our goal will be to create cards out of all 4 suits, with each suit having the values Ace thru King. This totals up to 52 cards!
        //Therefore, we will loop through all of the suits and create all of the values per suit.
            //"for, in" iterates thorugh keys of obj
            //"for, of" iterates through elements in array
        for (const suit of suits){
            //this pulls out the index and value of each entry in values..
            for (const [index, value] of values.entries()){
                //To create a card we need three parameters (suit, value and numValue).
                //Suit and Value came from the for loop...but numValue should be 1 = Ace, 2 = Two, etc.
                //So far the index of each card is nearly that...but Ace = 0, Two = 1, etc.
                //Therefore, to make index our numValue, we add 1.
                const card = new Card(suit,value,index+1);
                //Finally, with our new card, add it to our deck!
                cards.push(card);
            }
        }
        //After the loop completes, we will have 52 cards, which is our deck.
        this.deck = cards;
    }

    shuffle(){
        //Create a variable that reflects all of the cards in our deck (which is an array).
        const cards = this.deck;
        //To randomize, we're going to make our way through the array, starting from the back and going downwards.
        for (let i = cards.length-1; i > 0; i--){
            //We'll create a random Index between 1 and 52 (this is usual syntax for generating a random number)
            const randIndex = Math.floor(Math.random()*i);
            //..and then we'll do a classic swap by taking the card at that random position in the deck...
            const temp = cards[randIndex];
            cards[randIndex] = cards[i];
            //..and switching the positions of our current card and the randonly selected card!
            cards[i] = temp;
        }
    }
    //"Deal Random Card" means - deal card from the top of the deck
    dealRandomCard(){
        const card = this.deck.pop();
        return card;
    }
}

// const deck1 = new Deck();
// deck1.shuffle();
// console.log(deck1);

class Player{
    constructor(name){
        this.name=name;
        //hand starts out empty because you haven't been handed any cards yet!
        this.hand = [];
    }
    acceptCard(card){
        this.hand.push(card);
        return this;
    }
    discardCard(){
        //This gets rid of the last card in the hand
        this.hand.pop();
    }
    showHand(){
        //This gets each of the elements within the Player's hand...
        for (const card of this.hand){
            //..and then calls on the show function from the Card class
            card.show();
        }
    }
}

const player1 = new Player("John");
//In order to use the acceptCard function, you need a card. So first, we'll create a couple of cards by using the Deck's dealRandomCard function.
const card1 = deck1.dealRandomCard();
const card2 = deck1.dealRandomCard();
//Then, we can pass those cards to the player
player1.acceptCard(card1);
player1.acceptCard(card2);
player1.showHand();
console.log(player1);