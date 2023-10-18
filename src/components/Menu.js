import React from 'react';
import {Link} from "react-router-dom";

const Menu = ({items}) => {
 return (
  <div className='items-container'>
{
 items.map((item)=> {
  const { id, title, category, price, image, description } = item;
  return (
    <section className="item" key={id}>
      <Link to={`/products/${item.id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className="menu-info">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </section>
  );
 })
}
  </div>
 );
};

export default Menu;