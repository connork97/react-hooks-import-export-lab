import React from "react";
import * as RMFunc from '../data/user';

function Home() {
  return (
    <div id="home">
      <h1>
        {RMFunc.username} is a Web Developer from {RMFunc.city}
      </h1>
    </div>
  );
}

export default Home;