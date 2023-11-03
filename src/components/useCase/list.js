import React, { useState } from 'react';
import Details from './details';
import Add from './add';

function List() {

    const [list, setList] = useState([{ id: 1, name: 'pen', price: 20 }, { id: 2, name: 'pencil', price: 5 }]);
    const [selected, setSelected] = useState(null);

    const addProduct=(product)=>{
        product.id=list.length+1;
        setList([...list,product]);
    }

    return (<div>
        <h1>Product List</h1>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr><th>Id</th><th>Name</th><th>Price</th></tr>
            </thead>
            <tbody>
                {
                    list.map((item) => (
                        <tr key={item.id} onClick={() => setSelected(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className='row'>
            <div className='col'>
                {selected && <Details product={selected} />}
            </div>
            <div className='col'>
                <Add addProduct={addProduct} />
            </div>
        </div>
    </div>);
}

export default List;