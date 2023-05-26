import { FormEvent, useState } from "react";
import "./LayerForm.css";
import Layer from "../models/Layer";

interface Props {
  addALayer: (newLayer: Layer) => void;
  setForm: () => void;
}

const LayerForm = ({ addALayer, setForm }: Props) => {
  const [colorInput, setColorInput] = useState("pink");
  const [widthInput, setWidthInput] = useState(5);
  const [heightInput, setHeightInput] = useState(5);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);
    const newLayer: Layer = {
      color: colorInput,
      width: widthInput,
      height: heightInput,
      id: Math.random() * 100,
    };
    console.log(newLayer);
    addALayer(newLayer);
    setColorInput("");
    setWidthInput(0);
    setHeightInput(0);
    setForm();
  };
  return (
    <form className="LayerForm" onSubmit={submitHandler}>
      <label htmlFor="color">Flavor</label>
      <select
        id="color"
        size={1}
        defaultValue={colorInput}
        onChange={(e) => setColorInput(e.target.value)}
      >
        <option value="pink">Strawberry</option>
        <option value="yellow">Banana</option>
        <option value="blue">Superman</option>
        <option value="red">Red Velvet</option>
        <option value="green">Mint</option>
      </select>
      <label htmlFor="width">Width</label>
      <input
        type="range"
        min="1"
        max="10"
        defaultValue={widthInput}
        onChange={(e) => setWidthInput + e.target.value}
        className="slider"
        id="width"
      />
      <label htmlFor="height">Height</label>
      <input
        type="range"
        min="1"
        max="10"
        defaultValue={heightInput}
        onChange={(e) => setHeightInput + e.target.value}
        className="slider"
        id="height"
      />

      <button> Save</button>
      <button onClick={setForm}>Cancel</button>
    </form>
  );
};

export default LayerForm;
