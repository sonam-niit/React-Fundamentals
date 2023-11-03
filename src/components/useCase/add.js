import axios from 'axios';
import React, { useState } from 'react';
function Add({addProduct}) {
    const [name,setName]= useState('');
    const [price,setPrice]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        addProduct({name,price});
        setName('');
        setPrice('');
    }
    return ( <div>
        <h3 className='text-center'>Add Product</h3>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' placeholder='Name' className='form-control'
                value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Price</label>
                <input type='text' placeholder='Price' className='form-control'
                value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary'>Add Product</button>
        </form>
    </div> );
}

export default Add;