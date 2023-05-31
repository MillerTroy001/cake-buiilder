import { FormEvent, useState } from "react";
import "./LayerForm.css";
import Layer from "../models/Layer";

interface Props {
  addALayer: (newLayer: Layer, index: number) => void;
  setForm: () => void;
  index: number;
}

const LayerForm = ({ addALayer, setForm, index }: Props) => {
  const [colorInput, setColorInput] = useState("pink");
  const [widthInput, setWidthInput] = useState("5");
  const [heightInput, setHeightInput] = useState("5");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);
    const newLayer: Layer = {
      color: colorInput,
      width: +widthInput,
      height: +heightInput,
      id: Math.random() * 100,
    };
    console.log(newLayer);
    addALayer(newLayer, index);
    setColorInput("");
    setWidthInput("");
    setHeightInput("");
    setForm();
  };
  return (
    <form className="LayerForm" onSubmit={submitHandler}>
      <h2>Add a Flavor</h2>
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
        <option value="#800000">Red Velvet</option>
        <option value="#A2E4B8">Mint</option>
        <option value="chocolate">Chocolate</option>
        <option value="#ED9121">Carrot</option>
        <option value="#FAFA33">Lemon</option>
        <option value="black">Divorce Special - Black Licorice</option>
      </select>
      <label htmlFor="width">Width {widthInput}</label>
      <input
        type="range"
        min="1"
        max="10"
        step=".5"
        defaultValue={widthInput}
        onChange={(e) => setWidthInput(e.target.value)}
        className="slider"
        id="width"
      />
      <label htmlFor="height">Height {heightInput}</label>
      <input
        type="range"
        min="0.5"
        max="10"
        step=".5"
        defaultValue={heightInput}
        onChange={(e) => setHeightInput(e.target.value)}
        className="slider"
        id="height"
      />
      <div className="formButtonBox">
        <button> Save</button>
        <button onClick={setForm}>Cancel</button>
      </div>
    </form>
  );
};

export default LayerForm;
