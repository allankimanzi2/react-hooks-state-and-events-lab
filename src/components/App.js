import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appClass = `App ${isDarkMode ? 'dark' : 'light'}`;

  return (
    <div className={appClass}>
      {/* Use the Header component and pass onDarkModeClick as a prop */}
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;



