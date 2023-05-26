import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import Layer from "./models/Layer";

function App() {
  //THE STATE
  const [layers, setTheLayers] = useState<Layer[]>([
    { height: 2, width: 1, color: "green", id: 1 },
    { height: 3, width: 3, color: "pink", id: 2 },
    { height: 5, width: 5, color: "blue", id: 3 },
  ]);
  //FUNCTION
  const addNewLayer = (newLayer: Layer): void => {
    setTheLayers((prev) => {
      const copyOfCakeArray: Layer[] = prev.splice(0);
      copyOfCakeArray.push(newLayer);
      return copyOfCakeArray;
    });
  };
  const deleteLayer = (index: number): void => {
    setTheLayers((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  return (
    <main className="App">
      <CakeBuilder
        addLayer={addNewLayer}
        arrayOfLayers={layers}
        deleteLayer={deleteLayer}
      />
      <Cake arrayOfLayers={layers} />
    </main>
  );
}

export default App;
