import React, { useState } from "react";
import FoodBox from "./components/Foodbox";
import Search from "./components/Search";
import data from "../../resources/FoodData";

const App = () => {
  const [foods, setFoods] = useState(data);
  const [addedItems, setAddedItems] = useState([]);
  console.log(data);

  const handleSearch = (query) => {
    const filteredFoods = data.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  const handleAddItem = (item) => {
    const existingItem = addedItems.find(
      (addedItem) => addedItem.name === item.name
    );
    if (existingItem) {
      const updatedItems = addedItems.map((addedItem) =>
        addedItem.name === item.name
          ? { ...addedItem, quantity: addedItem.quantity + 1 }
          : addedItem
      );
      setAddedItems(updatedItems);
    } else {
      setAddedItems([...addedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleResetItem = (index) => {
    const updatedItems = addedItems.filter((_, i) => i !== index);
    setAddedItems(updatedItems);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onAdd={handleAddItem} />
      ))}
      {addedItems.map((addedItem, index) => (
        <div key={index}>
          <p>{`${addedItem.quantity} ${addedItem.name} = ${
            addedItem.cal * addedItem.quantity
          } cal`}</p>
          <button onClick={() => handleResetItem(index)}>Reset</button>
        </div>
      ))}
    </div>
  );
};

export default App;