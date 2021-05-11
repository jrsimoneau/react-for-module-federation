import React from 'react';

const SimpleComponent = () => {
  return (
    <React.Fragment>
      <h1>Simple React Component</h1>
      <button onClick={() => alert("Clicked")}>Click Me</button>
    </React.Fragment>
  )
};
export default SimpleComponent;