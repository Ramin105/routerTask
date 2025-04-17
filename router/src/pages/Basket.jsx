import React from 'react';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const navigate = useNavigate();

   

    return (
        <div>
            <button onClick={() => navigate('/')}>Back to Products</button>
            {basket.map(item => (
  <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
    <img src={item.image} alt={item.title} style={{ width: '100px' }} />
    <h3>{item.title}</h3>
    <p>Price: ${item.price}</p>
    <p>Quantity: {item.count}</p>
    <p>Total: ${(item.price * item.count).toFixed(2)}</p>
  </div>
))}
        </div>
    );
};

export default Basket;