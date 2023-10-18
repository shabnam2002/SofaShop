import React from "react";
import {useState}  from "react";
import Category from "./Category";
import Menu from "./Menu";
import items from "../data2";

const allCategory = ["همه", ...new Set(items.map((item) => item.category))];

function MTab() {
  const [menuItems, setMenuItems] = useState(items);
  const [categoryAll, setCategoryAll] = useState(allCategory);

  const filterItems = (category) => {
    if (category === "همه") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <div className="title-main"> 
      <h3> محصولات جدید</h3>
      </div>
      <Category category={categoryAll} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default MTab;
