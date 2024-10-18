import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Funcții pentru actualizarea stării
  const handleLeaveFeedback = (type) => {
    setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  // Funcția care calculează totalul feedback-urilor
  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  // Funcția care calculează procentajul recenziilor pozitive
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((state.good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;

