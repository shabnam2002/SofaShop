import React from 'react';

const Category = ({category,filterItems }) => {
  return (
    <div className="btn-container">
{
 category.map((category , index) => {
  return (
    <button key={index} className="filter-btn" onClick={() => filterItems(category)}>
      {category}
    </button>
  );
 })
}
    </div>
  );
};

export default Category;