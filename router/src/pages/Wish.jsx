import React from 'react';
import { useNavigate } from 'react-router-dom';

const Wish = () => {
    const wish = JSON.parse(localStorage.getItem('wish')) || [];
    const navigate = useNavigate();

   

    return (
   <div> <button onClick={() => navigate('/')}>Back to Products</button>
   <div style={{display:'flex', flexWrap:'wrap'}}>
       
       {wish.map(item => (
<div  key={item.id} style={{ width:'250px', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
<img src={item.image} alt={item.title} style={{ width: '100px' }} />
<h3>{item.title}</h3>
<p>Price: ${item.price}</p>

</div>
))}
   </div></div>
    );
};

export default Wish;
