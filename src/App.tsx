import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import Layer from "./models/Layer";

function App() {
  //THE STATE
  const [layers, setTheLayers] = useState<Layer[]>([]);
  //FUNCTION
  console.log(layers);

  const addNewLayer = (newLayer: Layer, index: number): void => {
    setTheLayers((prev) => {
      if (index === -1) {
        return [...prev, newLayer];
      } else {
        return [
          ...prev.slice(0, index + 1),
          newLayer,
          ...prev.slice(index + 1),
        ];
      }
    });
  };

  const deleteLayer = (index: number): void => {
    setTheLayers((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  return (
    <>
      <header>
        <h1>Welcome to Fancy Cakes</h1>
      </header>
      <main className="App">
        <CakeBuilder
          addLayer={addNewLayer}
          arrayOfLayers={layers}
          deleteLayer={deleteLayer}
        />
        <Cake arrayOfLayers={layers} />
      </main>
    </>
  );
}

export default App;
