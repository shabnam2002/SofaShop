import React , {useContext} from 'react';
import { DataContext } from './Context';
import {data} from "../data";
import { Link } from "react-router-dom";
import formatCurrency from "../util";

function Products() {

const value = useContext(DataContext);
const [products, setProducts] = value.products;
const addCart = value.addCart;


 return (
   <div className="cards">
     {data.map((product) => (
       <div className="card" key={product.id}>
         <img src={product.image} alt="product" />
         <div className="information">
           <Link to={`/products/${product.id}`}>
             <h3>{product.title}</h3>
           </Link>
           <p>{product.price} تومان</p>
         </div>
         <div className="addtocart">
           <button onClick={()=> addCart(product.id)}>افزودن به سبد خرید</button>
         </div>
       </div>
     ))}
   </div>
 );
}

export default Products;