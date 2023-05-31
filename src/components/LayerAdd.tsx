import { useState } from "react";
import Layer from "../models/Layer";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";
interface Props {
  addLayer: (newLayer: Layer, index: number) => void;
  index: number;
}
const LayerAdd = ({ addLayer, index }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const setForm = (): void => {
    setShowForm(false);
  };
  return (
    <section className="LayerAdd">
      {showForm ? (
        <LayerForm addALayer={addLayer} setForm={setForm} index={index} />
      ) : (
        <button onClick={() => setShowForm(true)}>Add Layer Above</button>
      )}
    </section>
  );
};

export default LayerAdd;
