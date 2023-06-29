import React, { useState } from 'react'
import images from '/home/justin/odin-memory-card/src/Components/images.js'

const Grid = () => {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const handleScoreChange = () => {
        setScore(score + 1);
    }

    return (
        <div id="container">
            <button>This is a button</button>
            <div id="grid">
                <div class="square"><img src={Object.values(images)[Math.round(Math.random()*35)]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[1]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[2]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[3]} alt={Object.keys(images)[0]}></img></div> 
                <div class="square"><img src={Object.values(images)[4]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[5]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[6]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[7]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[8]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[9]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[10]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[11]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[12]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[13]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[14]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[15]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[16]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[17]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[18]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[19]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[20]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[21]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[22]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[23]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[24]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[25]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[26]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[27]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[28]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[29]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[30]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[31]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[32]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[33]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[34]} alt={Object.keys(images)[0]}></img></div>
                <div class="square"><img src={Object.values(images)[35]} alt={Object.keys(images)[0]}></img></div>
            </div>
        </div>
    )
}

export default Grid