import PropTypes from "prop-types";

export const StarDisplay = (value) => {
  const filledStars = Math.round(value.value?value.value:0);
  const emptyStars = 5 - filledStars;
  return (
    <div className="StarDisplay">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="star">
          &#9733;
        </span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star">
          &#9734;
        </span>
      ))}
    </div>
  );
};

StarDisplay.propTypes = {
  value: PropTypes.number,
};
