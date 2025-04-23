import { useState } from "react";
import BasicGrid from "./components/BasicGrid";
import FancyGrid from "./components/FancyGrid";
import PhotoGallery from "./components/PhotoGallery";
import "./App.css";

function App() {
  const [componentIndex, setComponentIndex] = useState(0);
  const components = [<BasicGrid />, <FancyGrid />, <PhotoGallery />];

  return (
    <>
      <main>
        <h1>CSS Grid Tutorial</h1>
        <nav>
          <ul>
            <li>
              <button onClick={() => setComponentIndex(0)}>Basic Grid</button>
            </li>
            <li>
              <button onClick={() => setComponentIndex(1)}>Fancy Grid</button>
            </li>
            <li>
              <button onClick={() => setComponentIndex(2)}>
                Photo Gallery
              </button>
            </li>
          </ul>
        </nav>
        <div className="container">{components[componentIndex]}</div>
      </main>
    </>
  );
}

export default App;
