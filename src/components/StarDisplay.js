import { useState } from "react";
export const StarDisplay = (value) => {
  const [rating, setRating] = useState(0);
  setRating(Math.round(value.rating / 2));
  return (
    <div className="star-rating">
      <span className="star">&#9733;</span>
    </div>
  );
};
