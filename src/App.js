import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "api.openweathermap.org/data/2.5/forecast?q=cairo&appid=d0567773a9175ee190f9d62effeaf55a"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div>
      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."} */}
      <div class="grid-container">
        <input placeholder="Search for cities" class="section1"></input>
        <div class="section2">
          <div>asdfsgvasdf</div>
          <div>asdfsgvasdf</div>
          <div>asdfsgvasdf</div>
        </div>
        <div class="section3">
          <h2>Cairo</h2>
          <h1>31C</h1>
        </div>
        <div class="section4">
          <div>TODAY'S FORECAST</div>
          <div>25</div>
          <div>25</div>
          <div>25</div>
          <div>25</div>
          <div>25</div>
          <div>25</div>
        </div>
        <div class="section5">
          <div>asdfsgvasdf</div>
          <div>asdfsgvasdf</div>
          <div>asdfsgvasdf</div>
        </div>
      </div>
    </div>
  );
}

export default App;
