import React, { useState } from 'react'
import images from '/home/justin/odin-memory-card/src/Components/images.js'

const Grid = () => {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [grid, setGrid] = useState(0);
    // const [one, setOne] = useState(1);
    // const [two, setTwo] = useState(2);
    // const [three, setThree] = useState(3);
    // const [four, setFour] = useState(4);
    // const [five, setFive] = useState(5);
    // const [six, setSix] = useState(6);
    // const [seven, setSeven] = useState(7);
    // const [eight, setEight] = useState(8);
    // const [nine, setNine] = useState(9);
    // const [ten, setTen] = useState(10);
    // const [eleven, setEleven] = useState(11);
    // const [twelve, setTwelve] = useState(12);
    // const [thirteen, setThirteen] = useState(13);
    // const [fourteen, setFourteen] = useState(14);
    // const [fifteen, setFifteen] = useState(15);
    // const [sixteen, setSixteen] = useState(16);
    // const [seventeen, setSeventeen] = useState(17);
    // const [eighteen, setEighteen] = useState(18);
    // const [ninteen, setNineteen] = useState(19);
    // const [twenty, setTwenty] = useState(20);
    // const [twentyOne, setTwentyOne] = useState(21);
    // const [twentyTwo, setTwentyTwo] = useState(22);
    // const [twentyThree, setTwentyThree] = useState(23);
    // const [twentyFour, setTwentyFour] = useState(24);
    // const [twentyFive, setTwentyFive] = useState(25);
    // const [twentySix, setTwentySix] = useState(26);
    // const [twentySeven, setTwentySeven] = useState(27);
    // const [twentyEight, setTwentyEight] = useState(28);
    // const [twentyNine, setTwentyNine] = useState(29);
    // const [thirty, setThirty] = useState(30);
    // const [thirtyOne, setThirtyOne] = useState(31);
    // const [thirtyTwo, setThirtyTwo] = useState(32);
    // const [thirtyThree, setThirtyThree] = useState(33);
    // const [thirtyFour, setThirtyFour] = useState(34);
    // const [thirtyFive, setThirtyFive] = useState(35);


    const handleScoreChange = () => {
        setScore(score + 1);
    }

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

    const refreshGrid = () => {
        let refresh = makeGrid();
        setGrid(refresh[0])
    }
    const random = makeGrid()

    return (
        <div id="container">
            <button onClick={refreshGrid}>This is a button</button>
            <div id="grid">
                <div className="square"><img src={Object.values(images)[random[0]]} alt={Object.keys(images)[random[0]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[1]]} alt={Object.keys(images)[random[1]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[2]]} alt={Object.keys(images)[random[2]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[3]]} alt={Object.keys(images)[random[3]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[4]]} alt={Object.keys(images)[random[4]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[5]]} alt={Object.keys(images)[random[5]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[6]]} alt={Object.keys(images)[random[6]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[7]]} alt={Object.keys(images)[random[7]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[8]]} alt={Object.keys(images)[random[8]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[9]]} alt={Object.keys(images)[random[9]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[10]]} alt={Object.keys(images)[random[10]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[11]]} alt={Object.keys(images)[random[11]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[12]]} alt={Object.keys(images)[random[12]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[13]]} alt={Object.keys(images)[random[13]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[14]]} alt={Object.keys(images)[random[14]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[15]]} alt={Object.keys(images)[random[15]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[16]]} alt={Object.keys(images)[random[16]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[17]]} alt={Object.keys(images)[random[17]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[18]]} alt={Object.keys(images)[random[18]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[19]]} alt={Object.keys(images)[random[19]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[20]]} alt={Object.keys(images)[random[20]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[21]]} alt={Object.keys(images)[random[21]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[22]]} alt={Object.keys(images)[random[22]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[23]]} alt={Object.keys(images)[random[23]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[24]]} alt={Object.keys(images)[random[24]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[25]]} alt={Object.keys(images)[random[25]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[26]]} alt={Object.keys(images)[random[26]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[27]]} alt={Object.keys(images)[random[27]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[28]]} alt={Object.keys(images)[random[28]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[29]]} alt={Object.keys(images)[random[29]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[30]]} alt={Object.keys(images)[random[30]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[31]]} alt={Object.keys(images)[random[31]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[32]]} alt={Object.keys(images)[random[32]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[33]]} alt={Object.keys(images)[random[33]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[34]]} alt={Object.keys(images)[random[34]]}></img></div>
                <div className="square"><img src={Object.values(images)[random[35]]} alt={Object.keys(images)[random[35]]}></img></div>
            </div>
        </div>
    )
}

export default Grid
