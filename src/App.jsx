import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [points, setPoints] = useState(() => {
    const saveFeedback = JSON.parse(
      window.localStorage.getItem("saved-feedback")
    );
    if (saveFeedback !== null) {
      return saveFeedback;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(points));
  }, [points]);

  const updateFeedback = (feedbackType) => {
    setPoints((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedback = () => {
    setPoints({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = Object.values(points).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback = Math.round((points.good / totalFeedback) * 100);

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        options={Object.keys(points)}
        handleClick={updateFeedback}
        handleResetClick={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={[...Object.entries(points), ["total", totalFeedback]]}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
