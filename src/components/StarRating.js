export const StarRating = ({ newRating, setNewRating }) => {


  const handleClick = (index) => {
    setNewRating(index);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            id="star-rating-button"
            type="button"
            key={index}
            className={index <= newRating ? "on" : "off"}
            onClick={() => handleClick(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
