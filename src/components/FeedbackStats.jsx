import React from "react";
import PropTypes from "prop-types";

export default function FeedbackStats({ feedback }) {
  // calculate ratings aversage
  let average =
    feedback.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedack-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Averate Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};
