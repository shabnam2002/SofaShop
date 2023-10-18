import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Context";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const increase = value.increase;
  const decrease = value.decrease;
  const remove = value.remove;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((acc, curr) => {
        return acc + curr.price * curr.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  if (cart.length === 0) {
    return <div className="emptycart">
   <span >   <FaCartShopping /></span>
   <h1>سبد خرید خالی است.</h1>
   <p>رفتن به صفحه محصولات</p>
   <Link to="/products">
    <button className="">بازگشت</button>
   </Link>
      </div>
    ;
  }

  return (
    <div className="main">
      <div>
        {cart.map((product) => (
          <div className="cart" key={product.id}>
            <div className="delete" onClick={() => remove(product.id)}>
              ×
            </div>
            <img src={product.image} />
            <div className="box-details-cart">
              <h2>{product.title}</h2>
              <h3>{product.price} تومان</h3>
              <div className="amount-cart">
                <button className="count" onClick={() => increase(product.id)}>
                  +
                </button>
                <span>{product.count}</span>
                <button className="count" onClick={() => decrease(product.id)}>
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>مجموع قیمت</h3>
        <p>قیمت کل : {total}</p>
        <Link to="/">
          <button className="checkout">پرداخت</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
