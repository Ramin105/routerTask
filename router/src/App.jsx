import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const App = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);

  const addToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    const existingItem = basket.find((x) => x.id === item.id);

    if (existingItem) {
      existingItem.count += 1;
    } else {
      basket.push({ ...item, count: 1 });
    }

    localStorage.setItem("basket", JSON.stringify(basket));
  };
  const addToWish = (item) => {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];
    let current = wish.find((x) => x.id == item.id);
    if (current) {
      alert("elave etmisiz");
    } else {
      wish = [...wish, { ...item }];
    }
    localStorage.setItem("wish", JSON.stringify(wish));
  };
  return (
    <div>
       <button onClick={() => navigate('/basket')}>Basket</button>
       <button onClick={() => navigate('/wish')}>Wish</button>
      <div style={{display:'flex', flexWrap:'wrap',gap:'15px'}}>
        {data &&
          data.map((item) => (
            <div style={{ width: "15%" }} key={item.id}>
              <div>
                <div style={{width:'200px', height:'200px',objectFit:'cover'}}><img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%",height:'100%' }}
                /></div>
                <div className="card" >
                  <h5 >{item.title}</h5>
                  <p></p>
                  <p >${item.price}</p>
                  <div>
                    <button onClick={() => addToBasket(item)}>
                      Add to Cart
                    </button>
                    <button onClick={() => addToWish(item)}>Wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
