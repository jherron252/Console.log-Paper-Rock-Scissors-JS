// Choices and player choice
var options = ['Paper', 'Rock', 'Scissors'];
var player = options[1];


function gamePlay (){
    // Computer choose random string from array options
    var rand = options[(Math.random() * options.length) | 0]
    var computer = rand;

    // Win conditions
    if ((player === options[0] && computer === options[1]) || (player === options[1] && computer === options[2]) || (player === options[2] && computer === options[0])){
        console.log('Congratulations, you win! You chose ' + player + '. Computer chose ' + computer);
    // Lose conditions
    } else {
        console.log('Sorry, you lose! Computer won with ' + computer + '.');
    }
}
// Play the game
gamePlay();