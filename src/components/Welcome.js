import React from "react";

const Welcome = ({ name, age }) => {
  console.log(name);
  return (
    <div>
      <h1>
        Hello {name}, you are {age}!!!
      </h1>
    </div>
  );
};

export default Welcome;
