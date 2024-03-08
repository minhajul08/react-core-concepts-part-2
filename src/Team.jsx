import { useState } from "react"

export default function Team () {

    const handelAdd = () => {
        const newAdd =team+1;
        setTeam (newAdd);
    }

    const handelRemove =() => {
        setTeam (team-1)
    }

    const [team,setTeam] = useState (11);
   const teamStyle = {
    border : '2px solid red',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px'
   }

    return (
        <div style={teamStyle}>
        <h3> Players : {team}</h3>
        <button onClick={handelAdd}>Add</button>
        <button onClick={handelRemove}>Remove</button>
        </div>
       
    )
}