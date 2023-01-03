import React, { useState } from "react";

import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta",
];

const App = () => {
  const [sortedarray, setsortedarray] = useState([]);

  const sortarra = (e) => {
    console.log(e.target.value);

    const sortedarray1 = searchArray.filter((item) => {
      // console.log(item);
      return item.toLowerCase().includes(e.target.value.toLowerCase());
    });

    if (e.target.value == "") {
      setsortedarray([]);
    } else {
      setsortedarray([...sortedarray1]);
    }
  };
  return (
    <div id="main">
      <input onChange={(e) => sortarra(e)} />
      <p>result</p>
      <ul>
        {sortedarray.map((items) => {
          return (
            <>
              <li>{items}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
