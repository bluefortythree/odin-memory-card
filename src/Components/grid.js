import React, { useState } from 'react'
import images from '/home/justin/odin-memory-card/src/Components/images.js'

const Grid = () => {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [grid, setGrid] = useState(0);
    const [clicked, setClicked] = useState([]);
    const [status, setStatus] = useState('');

    const makeGrid = () => {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
        let newArr = [];
        for(let i = 0; i < 36; i++) {
            let removedAt = Math.floor(Math.random() * arr.length);
            let valueAt = arr.splice(removedAt, 1);
            newArr.push(valueAt)
        }
        return newArr;
    }

    const refreshGrid = (e) => {
        let refresh = makeGrid();
        setGrid(refresh[0]);
        if(score < 35) {
            if(clicked.includes(e.target.alt)) {
                setScore(0);
                setClicked([]);
                setStatus('Game over. Click to try again!')
                gameOver()
            } else {
                clicked.push(e.target.alt);
                setStatus('');
                setScore((score) => score + 1);
                if(highScore === 0 || highScore === score) {
                    setHighScore((highScore) => highScore + 1)
                } 
            }    
        } else if(score === 35) {
            if(clicked.includes(e.target.alt)) {
                setClicked([]);
                setStatus('Game over. Click to try again!')
                gameOver()
            } else {
                clicked.push(e.target.alt);
                setStatus('');
                setScore((score) => score + 1);
                if(highScore === 0 || highScore === score) {
                    setHighScore((highScore) => highScore + 1)
                }
                setStatus("Congratulations. You won! Click to play again.")
                gameOver() 
            }  
            
        }
    }
    const random = makeGrid()

    const gameOver = () => {
        document.getElementById("game-over").style.display = "flex"
        document.getElementById("grid").style.display = "none"
    }
    
    const newGame = () => {
        document.getElementById("game-over").style.display = "none"
        document.getElementById("grid").style.display = "grid"
        setScore(0);
        setClicked([]);
    }
    return (
        <div id="container">
            <div id="scoreboard">
                <div id="your-score">Your score: {score}</div>
                <div id="high-score">High score: {highScore}</div>
            </div>
            <div id="grid"> 
                <div className="square"><img src={Object.values(images)[random[0]]} alt={Object.keys(images)[random[0]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[1]]} alt={Object.keys(images)[random[1]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[2]]} alt={Object.keys(images)[random[2]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[3]]} alt={Object.keys(images)[random[3]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[4]]} alt={Object.keys(images)[random[4]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[5]]} alt={Object.keys(images)[random[5]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[6]]} alt={Object.keys(images)[random[6]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[7]]} alt={Object.keys(images)[random[7]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[8]]} alt={Object.keys(images)[random[8]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[9]]} alt={Object.keys(images)[random[9]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[10]]} alt={Object.keys(images)[random[10]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[11]]} alt={Object.keys(images)[random[11]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[12]]} alt={Object.keys(images)[random[12]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[13]]} alt={Object.keys(images)[random[13]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[14]]} alt={Object.keys(images)[random[14]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[15]]} alt={Object.keys(images)[random[15]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[16]]} alt={Object.keys(images)[random[16]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[17]]} alt={Object.keys(images)[random[17]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[18]]} alt={Object.keys(images)[random[18]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[19]]} alt={Object.keys(images)[random[19]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[20]]} alt={Object.keys(images)[random[20]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[21]]} alt={Object.keys(images)[random[21]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[22]]} alt={Object.keys(images)[random[22]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[23]]} alt={Object.keys(images)[random[23]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[24]]} alt={Object.keys(images)[random[24]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[25]]} alt={Object.keys(images)[random[25]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[26]]} alt={Object.keys(images)[random[26]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[27]]} alt={Object.keys(images)[random[27]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[28]]} alt={Object.keys(images)[random[28]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[29]]} alt={Object.keys(images)[random[29]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[30]]} alt={Object.keys(images)[random[30]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[31]]} alt={Object.keys(images)[random[31]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[32]]} alt={Object.keys(images)[random[32]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[33]]} alt={Object.keys(images)[random[33]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[34]]} alt={Object.keys(images)[random[34]]} onClick={refreshGrid}></img></div>
                <div className="square"><img src={Object.values(images)[random[35]]} alt={Object.keys(images)[random[35]]} onClick={refreshGrid}></img></div>
            </div>
            <div id="game-over" onClick={newGame}>{status}</div>
        </div>
    )
}

export default Grid
