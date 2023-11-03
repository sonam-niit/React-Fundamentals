import React, { useState } from 'react';
function Variable() {

    const [name,setName]=useState("Sonam Soni");

    const onChange=()=>{
        setName("Sonam Soni(B.E.I.T.)");
    }
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    return (<div>
        <h3>Welcome {name}</h3>
        <button onClick={onChange}>Change</button>

        <input type='text' value={name} placeholder='Enter Name'
        onChange={handleChange} />
    </div>  );
}

export default Variable;