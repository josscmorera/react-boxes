import React from 'react'

function Square(props) {
    const { number, color } = props;
    
  return (
    <div style={{ backgroundColor:color }} className="square"> Square {number}{""}</div>
  )
}

export default Square
