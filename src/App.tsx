import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import Layer from "./models/Layer";

function App() {
  //THE STATE
  const [layers, setTheLayers] = useState<Layer[]>([
    { height: 2, width: 1, color: "green" },
    { height: 3, width: 3, color: "pink" },
    { height: 5, width: 5, color: "blue" },
  ]);
  //FUNCTION
  const addNewLayer = (newLayer: Layer): void => {
    setTheLayers((prev) => {
      const copyOfCakeArray: Layer[] = prev.splice(0);
      copyOfCakeArray.push(newLayer);
      return copyOfCakeArray;
    });
  };

  return (
    <main className="App">
      <CakeBuilder addLayer={addNewLayer} />
      <Cake arrayOfLayers={layers} />
    </main>
  );
}

export default App;
