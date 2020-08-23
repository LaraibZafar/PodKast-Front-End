import React from "react";
import "./App.css";

import FrontBanner from "./components/banner-component/banner.component.jsx";
import PodcastList from "./components/podcast-list-component/podcast-list.component.jsx";

function App() {
  return (
    <div className="App">
      <FrontBanner />
      <PodcastList />
    </div>
  );
}

export default App;
