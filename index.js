// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
} */

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        }
    return gifts;
}

wrapGifts(gifts);*/ 

//Assignment - writecards()

const cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cards) {
    const birthdayCards = []
    for(let i = 0; i < cards.length; i++) {
        let message = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
        birthdayCards.push(message)
    }
    return birthdayCards

}
writeCards(cards)

// Assignment - countDown 

function countDown() {
    let i = 10;
    while (i >= 0) {
console.log(i--);
    }
}

