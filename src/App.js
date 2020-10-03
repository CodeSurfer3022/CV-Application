import React from 'react';
import Header from "./Components/Header";
import Employment from "./Components/Employment";
import Education from "./Components/Education";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <form>
        <Header />
        <Employment />
        <Education />
        <Skills />
      </form>
    </div>
  );
}

export default App;
