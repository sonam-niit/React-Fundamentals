import React, { useEffect, useState } from 'react';

function FetchData() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch(err => console.log(err))
    },[])
    return (<div>
        <h1>Users List</h1>
        {
            users.map(item=>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                    </tr>
                )
            })
        }
    </div>);
}

export default FetchData;