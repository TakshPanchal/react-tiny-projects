import { FaStar } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";

const Stars = ({ nStars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [starHighlight, setStarHighlight] = useState(0);

  const handleMouseMove = (index) => {
    setStarHighlight(index + 1);
  };
  const handleMouseLeave = () => {
    setStarHighlight(0);
  };

  return (
    <div className="container">
      {[...Array(nStars)].map((_, index) => (
        <FaStar
          key={index}
          className="star"
          color={
            index + 1 <= rating || index + 1 <= starHighlight
              ? "#ffd700"
              : "#FFF"
          }
          size={20}
          onClick={() => setRating(index + 1)}
          onMouseMove={() => handleMouseMove(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default Stars;
