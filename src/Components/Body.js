import React from 'react'
import Square from './Square';


function Body() {
  return (
    <div className="body">
      <center><h1>Body</h1><br/>
      <img style={{height:"200px"}}src="https://cdn.vox-cdn.com/thumbor/lWOGzsPeAD6YzEVVNH001nrSqPM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24458108/captain_pikachu.jpg" />
      <br/>
        <br/>
      <p>Krusty Krab Pizza, it's the pizza for you and meeeeee!</p>
      <div className="square-container">
        <Square number="1" color="red" />
        <Square number="2" color="blue" />
        <Square number="3" color="green" />
      </div></center>
    </div>
  )
}

export default Body