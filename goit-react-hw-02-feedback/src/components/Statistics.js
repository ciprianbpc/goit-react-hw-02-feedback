import React from 'react';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedbacks: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics;
