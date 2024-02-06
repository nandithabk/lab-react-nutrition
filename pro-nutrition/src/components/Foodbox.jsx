import React, { useState } from "react";
import "./components.css";

const FoodBox = ({ food, onAdd }) => {
  const [quantity, setQuantity] = useState(0); // Set initial quantity to 0
  const [totalItems, setTotalItems] = useState(0); // Total items chosen
  const [totalCalories, setTotalCalories] = useState(0); // Total calories consumed

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity); // Increment quantity by 1
    onAdd({ ...food, quantity: newQuantity }); // Pass the updated quantity to the parent component
    setTotalItems(totalItems + 1); // Increment total items chosen by 1
    setTotalCalories(totalCalories + food.cal); // Increment total calories by the calories of the food item
  };

  const handleReset = () => {
    setQuantity(0);
    setTotalItems(0);
    setTotalCalories(0);
  };

  return (
    <div className="conatiner">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.img} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.cal} cal</small>
              </p>
            </div>
          </div>

          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={quantity}
                  readOnly
                />
                <button className="button is-info" onClick={handleAdd}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="calculator">
        {/* <p>{food.name} {totalItems} =  </p>
        <p>Total Calories Consumed: {totalCalories} cal</p> */}
        <p>
          {totalItems} {food.name} = {totalCalories} Calories
        </p>
        <button className="button-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default FoodBox;