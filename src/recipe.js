import React from "react";

const recipe = ({ title, calories, img, ing }) => {
  return (
    <div className="card">
      <h1 className="head">{title}</h1>
      <p>Calories {calories}</p>
      <ol className="ing">
        {ing.map((ingr) => (
          <li>{ingr.text}</li>
        ))}
      </ol>
      <img className="img" src={img} alt="" />
    </div>
  );
};

export default recipe;
