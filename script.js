let hands = ["rock", "paper", "scissors"]
let playerEl = document.getElementById("player-el")
let computerEL = document.getElementById("computer-el")
let resultEl = document.getElementById("result-el")
const vinVisUgebs = {
	"scissors": "paper",
	"paper": "rock",
	"rock": "scissors"}

function RPS(selection) {
	console.log("aqvar")
	playerEl.textContent = selection
	let computerChoice = RPSComputer() ;
	computerEL.textContent = computerChoice
	resultEl.textContent = winner(selection,computerChoice) 
}


function RPSComputer() {
    let i = Math.floor(Math.random() * hands.length)
	return hands[i]
}

function winner(selection,computerChoice) {
	if (selection === computerChoice){
		return "draw"
	}  
	if (vinVisUgebs[selection] === computerChoice){
		return "You win"
	} 
	return "You lose"
}
