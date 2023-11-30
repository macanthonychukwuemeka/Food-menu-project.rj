import { useState } from "react";
import menu from "./data";
import Menu from "./Menu";
import Title from "./Title";
import Categories from "./Categories";

// const tempCategory = menu.map((item) => item.category)
// convert to array
// const tempcat = new Set(tempCategory)
// const temp = ["all", ...tempcat]

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
// console.log(allCategories)

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    //category is the used as the key value in the button
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    //if item.category is === category, then add it to the array of newItem
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text={"our menu"} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
