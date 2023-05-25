import { FormEvent, useState } from "react";
import "./LayerForm.css";
import Layer from "../models/Layer";

interface Props {
  addALayer: (newLayer: Layer) => void;
}

const LayerForm = ({ addALayer }: Props) => {
  const [colorInput, setColorInput] = useState("");
  const [widthInput, setWidthInput] = useState(0);
  const [heightInput, setHeightInput] = useState(0);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const newLayer: Layer = {
      color: colorInput,
      width: widthInput,
      height: heightInput,
    };
    addALayer(newLayer);
  };
  return (
    <form className="LayerForm" onSubmit={submitHandler}>
      <label htmlFor="color">Flavor</label>
      <select id="color" size={1}>
        <option value="pink">Strawberry</option>
        <option value="yellow">Vanilla</option>
        <option value="blue">Superman</option>
        <option value="red">Red Velvert</option>
        <option value="green">Mint</option>
      </select>
      <label htmlFor="width">Width</label>
      <input type="range" min="1" max="10" className="slider" id="myRange" />
      <label htmlFor="height">Height</label>
      <input type="range" min="1" max="10" className="slider" id="height" />
      <button>Save</button>
      <button>Cancel</button>
    </form>
  );
};

export default LayerForm;
