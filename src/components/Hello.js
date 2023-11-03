import React, { useEffect, useState } from 'react';
import Button from './button';
function Hello({name,message}) {
   
    const increment=()=>{
        alert("Increment Function Called")
    }
    const decrement=()=>{
        alert("Increment Function Called")
    }
    return ( <div>
        <h1>Hello: {name}</h1>
        <h3>Message: {message}</h3>
        <Button name="Increment" function1={increment}/>
        <Button name="Decrement" function1={decrement}/>
    </div> );
}

export default Hello;