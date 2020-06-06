import React, { useState } from 'react';

const Name = () => {
    const [name, setName] = useState("");
    return (
        <label className="header-name">
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                // making it easier for the end-user to change the name.
                onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
                placeholder="Untitled"
            />
        </label>
    )
}

export default Name;