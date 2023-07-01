import React from 'react'
import Grid from '/home/justin/odin-memory-card/src/Components/grid.js'

const Test = () => {
  return (
    <div>
      <div id="title">Memory Card Game</div>
      <br></br>
      <div id="instructions">Click on a new picture every round. If you get 36 points, you win!</div>
      <br></br>
      <Grid />
    </div>
  )
}

export default Test