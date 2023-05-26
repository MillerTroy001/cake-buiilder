import { useState } from "react";
import Layer from "../models/Layer";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";
interface Props {
  addLayer: (newLayer: Layer) => void;
}
const LayerAdd = ({ addLayer }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const setForm = (): void => {
    setShowForm(false);
  };
  return (
    <section className="LayerAdd">
      {showForm ? (
        <LayerForm addALayer={addLayer} setForm={setForm} />
      ) : (
        <button onClick={() => setShowForm(true)}>Add a Layer</button>
      )}
    </section>
  );
};

export default LayerAdd;
