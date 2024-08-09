import { useState } from "react"
import './ShifumiGame.css'
import rockImage from './assets/rock.png'
import paperImage from './assets/paper.png'
import scissorsImage from './assets/scissors.png'
import userConfettiGif from './assets/confetti.gif'
import computerConfettiGif from './assets/confetti.gif'
import loserUserGif from './assets/loser.gif'
import loserComputerGif from './assets/loser.gif'
import tieUser from './assets/grimacing_face.png'
import tieComputer from './assets/grimacing_face.png'

const choices = ['rock', 'paper', 'scissors']

const ShifumiGame = ({ setBgColor }) => {
    const [gameCounter, setGameCounter] = useState(0)
    const [winCounter, setWinCounter] = useState(0)
    const [loseCounter, setLoseCounter] = useState(0)
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState('')
    const [showUserConfetti, setShowUserConfetti] = useState(false)
    const [showComputerConfetti, setShowComputerConfetti] = useState(false)
    const [showLoserUserGif, setShowLoserUserGif] = useState(false)
    const [showLoserComputerGif, setShowLoserComputerGif] = useState(false)
    const [showTieUser, setShowTieUser] = useState(false)
    const [showTieComputer, setShowTieComputer] = useState(false)

    const playGame = (choice) => {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(computerChoice)
        setUserChoice(choice)
        setGameCounter(gameCounter + 1)
        setWinner(choice, computerChoice)
    }

    const setWinner = (user, computer) => {
        setShowTieUser(false)
        setShowTieComputer(false)
        setShowUserConfetti(false)
        setShowComputerConfetti(false)
        setShowLoserUserGif(false)
        setShowLoserComputerGif(false)
        if (user === computer) {
            setResult("It's a tie !")
            setBgColor('grey')
            setShowTieUser(true)
            setShowTieComputer(true)
        }
        else if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            setResult('You win !')
            setWinCounter(winCounter + 1)
            setBgColor('rgb(38, 158, 38)')
            setShowUserConfetti(true)
            setShowLoserComputerGif(true)
            // setTimeout(() => {
            //     setShowUserConfetti(false)
            //     setShowLoserComputerGif(false)
            // }, 3000)
        }
        else {
            setResult('You lost...')
            setLoseCounter(loseCounter + 1)
            setBgColor('rgb(236, 73, 52)')
            setShowComputerConfetti(true)
            setShowLoserUserGif(true)
        }
    }

    return (
        <div className="shifumi">
            <div className="player">
                {showUserConfetti && <img src={userConfettiGif} alt="User Confetti" className="gif user-confetti" />}
                {showTieUser && <img src={tieUser} alt="User Tie" className="gif user-tie" />}
                {showLoserUserGif && <img src={loserUserGif} alt="User loser" className="gif user-loser" />}
                <p>{userChoice ? 'Your choice' : null}</p>
                <img id="image-result" src={userChoice ? require(`./assets/${userChoice}.png`) : null} alt={userChoice}></img>
                <h3>{userChoice ? `Win counter: ${winCounter}` : null}</h3>
            </div>
            <div className="shifumi-game">
                <h2>Game counter: {gameCounter}</h2>
                <p id="result">{result}</p>
                <div className="button-container">
                    <button onClick={() => playGame('rock')}><img src={rockImage} alt="Rock"></img></button>
                    <button onClick={() => playGame('paper')}><img src={paperImage} alt="Paper"></img></button>
                    <button onClick={() => playGame('scissors')}><img src={scissorsImage} alt="Scissors"></img></button>
                </div>
            </div>
            <div className="player">
                {showComputerConfetti && <img src={computerConfettiGif} alt="Computer Confetti" className="gif computer-confetti" />}
                {showTieComputer && <img src={tieComputer} alt="Computer Tie" className="gif computer-tie" />}
                {showLoserComputerGif && <img src={loserComputerGif} alt="Computer loser" className="gif computer-loser" />}
                <p>{computerChoice ? "Computer's choice" : null}</p>
                <img id="image-result" src={computerChoice ? require(`./assets/${computerChoice}.png`) : null} alt={computerChoice}></img>
                <h3>{computerChoice ? `Win counter: ${loseCounter}` : null}</h3>
            </div>
        </div>
    )
}

export default ShifumiGame