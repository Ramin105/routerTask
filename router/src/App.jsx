import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <div>
        {data &&
          data.map((item) => (
            <div style={{ width: "15%" }} key={item.id}>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text"></p>
                  <p className="card-text">${item.price}</p>
                  <div>
                    <button onClick={() => addToBasket(item)}>
                      Add to Cart
                    </button>
                    <button onClick={() => addToWish(item)}>♡ Wishlist</button>
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
