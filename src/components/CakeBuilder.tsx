import Layer from "../models/Layer";
import "./CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";
import LayerForm from "./LayerForm";

interface Props {
  addLayer: (newLayer: Layer, index: number) => void;
  arrayOfLayers: Layer[];
  deleteLayer: (index: number) => void;
}

const CakeBuilder = ({ addLayer, arrayOfLayers, deleteLayer }: Props) => {
  return (
    <div className="CakeBuilder">
      {arrayOfLayers.map((Obj, index) => (
        <LayerBuilder
          key={Obj.id}
          oneLayer={Obj}
          index={index}
          deleteLayer={deleteLayer}
          addLayer={addLayer}
        />
      ))}
      <LayerAdd addLayer={addLayer} index={-1} />
    </div>
  );
};

export default CakeBuilder;
