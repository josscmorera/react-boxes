import { useState } from 'react'

function Sidebar() {
    const colorArray = ["red", "blue", "green"];
    const [colors, SetColors] = useState(colorArray)
    const [name, SetName] = useState("Jose")
    return (
        <div className="sidebar">
            <h1>{name}</h1>
            <button onClick={() => SetName("Paul")}>Change Name</button>
            {colors.map((color)  => {
                return <p style={{ color: color }}>{color}</p>
            })}
        </div>
    )
}

export default Sidebar