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

//  {
//   "name": "react-project",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0"
//   },
//   "devDependencies": {
//     "@types/react": "^18.0.27",
//     "@types/react-dom": "^18.0.10",
//     "@vitejs/plugin-react": "^3.1.0",
//     "vite": "^4.1.0"
//   }
// }

// import { useState } from "react";
// import menu from "./data";
// import Menu from "./Menu";
// import Title from "./Title";
// import Categories from "./Categories";

// // const tempCategory = menu.map((item) => item.category)
// // convert to array
// // const tempcat = new Set(tempCategory)
// // const temp = ["all", ...tempcat]

// const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
// // console.log(allCategories)

// const App = () => {
//   const [menuItems, setMenuItems] = useState(menu);
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     //category is the used as the key value in the button
//     if (category === "all") {
//       setMenuItems(menu);
//       return;
//     }
//     const newItems = menu.filter((item) => item.category === category);
//     //if item.category is === category, then add it to the array of newItem
//     setMenuItems(newItems);
//   };
//   return (
//     <main>
//       <section className="menu">
//         <Title text={"our menu"} />
//         <Categories categories={categories} filterItems={filterItems} />
//         <Menu menuItems={menuItems} />
//       </section>
//     </main>
//   );
// };
// export default App;

// const Categories = ({ categories, filterItems }) => {
//   return (
//     <div className='btn-container'>
//       {categories.map((category) => {
//         return (
//           <button
//             type='button'
//             className='btn'
//             onClick={() => filterItems(category)}
//             key={category}>
//             {category}
//           </button>
//         )
//       })}
//     </div>
//   )
// }
// export default Categories

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// import MenuItem from "./menuItem";

// const Menu = ({ menuItems }) => {
//   return (
//     <div className="section-center">
//       {menuItems.map((menuItem) => {
//         return <MenuItem key={menuItem.id} {...menuItem} />;
//       })}
//     </div>
//   );
// };
// export default Menu;

// const MenuItem = ({ img, title, price, desc }) => {
//   return (
//     <article>
//       <img src={img} alt={title} className='img' />
//       <div className='item-info'>
//         <header>
//           <h5>{title}</h5>
//           <span className='item-price'>${price}</span>
//         </header>
//         <p className='item-text'>{desc}</p>
//       </div>
//     </article>
//   )
// }
// export default MenuItem
