import Layer from "../models/Layer";
import "./CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";
import LayerForm from "./LayerForm";

interface Props {
  addLayer: (newLayer: Layer) => void;
}

const CakeBuilder = ({ addLayer }: Props) => {
  return (
    <div className="CakeBuilder">
      <LayerForm addALayer={addLayer} />
      <LayerAdd />
      <LayerBuilder />
    </div>
  );
};

export default CakeBuilder;
