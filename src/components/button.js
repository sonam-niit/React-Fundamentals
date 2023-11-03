import React from 'react';

//Destructuring the props property
function Button({name,function1}) {
    return (<button onClick={function1}>{name}</button>  );
}

export default Button;