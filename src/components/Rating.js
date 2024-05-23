const Rating = ({ value = 0 }) => {
  const width = value * 20 + "px";

  return (
    <div className="rating">
      <div className="rating innerRating" style={{ width }}></div>
    </div>
  );
};

export default Rating;
