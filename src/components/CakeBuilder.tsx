import Layer from "../models/Layer";
import "./CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";
import LayerForm from "./LayerForm";

interface Props {
  addLayer: (newLayer: Layer) => void;
  arrayOfLayers: Layer[];
  deleteLayer: (index: number) => void;
}

const CakeBuilder = ({ addLayer, arrayOfLayers, deleteLayer }: Props) => {
  return (
    <div className="CakeBuilder">
      <LayerAdd addLayer={addLayer} />
      {arrayOfLayers.map((Obj, index) => (
        <LayerBuilder
          key={Obj.id}
          oneLayer={Obj}
          index={index}
          deleteLayer={deleteLayer}
        />
      ))}
    </div>
  );
};

export default CakeBuilder;
