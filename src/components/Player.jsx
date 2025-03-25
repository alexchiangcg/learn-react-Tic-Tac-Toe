import { useState } from "react";


export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    let playerName = <span className="player-name">{newName}</span>

    if (isEditing) {
        playerName = <input type="text" value={newName} onChange={handleNameChange} />
    }

    function handleNameChange(event) {
        setNewName(event.target.value);
    }


    return (
        <li className="player" >
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => { handleEditClick() }}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
