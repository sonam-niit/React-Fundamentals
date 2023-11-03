import React from 'react';
function Details(props) {
    const product= props.product;
    return ( <div>
        <h3>Product Details Id: {product.id}</h3>
        <h6>Name:{product.name}</h6>
        <h6>Price:{product.price}</h6>
    </div> );
}

export default Details;