import { createContext, useState, useEffect } from "react";
import { data } from "../data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState(data);
  
  const [cart, setCart] = useState([]);
  //localstorage
    useEffect(() => {
      const dataCart = JSON.parse(localStorage.getItem("dataCart"));
      if (dataCart) {
      setCart(dataCart)
    };  
    }, []);

    useEffect(() => {
      localStorage.setItem("dataCart", JSON.stringify(cart));
    }, [cart]);


  //dont add tekrari
  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("محصول در سبد خرید وجود دارد");
    }
  };

  //increase in cartshop
  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  //decrease in cartshop

  const decrease = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });

    setCart([...cart]);
  };

  //remove in cartshop

  const remove = (id) => {
    if (window.confirm("حذف می‌کنی")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
    increase: increase,
    decrease: decrease,
    remove: remove,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
