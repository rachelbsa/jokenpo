const result = document.querySelector('.result')
const humanScore =  document.querySelector('#human-score')
const machineScore =  document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

/*  
ENUM : usados para evitar erros no código, quando este já estiver grande
Ex:

const GAME_OPTIONS = {
ROCK: 'rock'
PAPER: 'paper'
SCISSORS: 'scissors'

Utilizando desta forma, o próprio VsCode completa a palavra, sem correr o risco de digitar ou copiar errado e dar erro no código
}
*/

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine() )   
}

 const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randonNumber = Math.floor(Math.random() * 3 )

    return choices[randonNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + "Maquina: " + machine)

    if(human === machine){
        result.innerHTML = "Deu empate!"
    } else if (
    (human === 'paper' && machine === 'rock') || 
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
    ) {
      humanScoreNumber++
      humanScore.innerHTML = humanScoreNumber
      result.innerHTML = "Você ganhou! &#x1F389"
    } else {
      machineScoreNumber++
      machineScore.innerHTML = machineScoreNumber
      result.innerHTML = "Você perdeu para a máquina! &#x1F614 "
    }
}