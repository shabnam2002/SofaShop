import React, { useContext, useState } from "react";
import { DataContext } from "./Context";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const value = useContext(DataContext);
  const [products, setProducts] = value.products;
  const addCart = value.addCart;
  const increase = value.increase;
  const decrease = value.decrease;

  const details = products.filter((product, index) => {
    return product.id === id;
  });

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product.id}>
          <img src={product.image} />
          <div className="box-details">
            <h2>{product.title}</h2>
            <h3>{product.price} تومان</h3>

            <p className="desc">{product.description}</p>
            <button onClick={() => addCart(product.id)}>
              افزودن به سبد خرید
            </button>
            <p className="category">
              دسته‌بندی: <span>{product.category}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Detail;
