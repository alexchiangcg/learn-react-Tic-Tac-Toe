import { useState } from "react";


export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(editing=>!editing);
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleNameChange} required/>
    }

    


    return (
        <li className="player" >
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => { handleEditClick() }}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
