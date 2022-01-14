import React, { useState } from 'react';

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  };
  const handleClick2 = () => {
    setCurrentCount(currentCount - props.incrementBy);
  };

  return (
    <div class="count_container">
      <button class="count_btn" onClick={handleClick}>
        +{props.incrementBy}
      </button>

      <div className="count_display">{currentCount}</div>
      <button class="count_btn" onClick={handleClick2}>
        -{props.decrementBy}
      </button>
    </div>
  );
};

export default CountButton;
