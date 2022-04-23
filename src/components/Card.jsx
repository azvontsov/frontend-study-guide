import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.question}</h1>
      <p>{props.overview}</p>
    </div>
  );
};

export default Card;
