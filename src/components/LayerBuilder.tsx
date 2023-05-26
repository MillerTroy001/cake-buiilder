import Layer from "../models/Layer";
import "./LayerBuilder.css";
interface Props {
  oneLayer: Layer;
  index: number;
  deleteLayer: (index: number) => void;
}
const LayerBuilder = ({ oneLayer, index, deleteLayer }: Props) => {
  return (
    <section className="LayerBuilder">
      <div>
        <p>Color: {oneLayer.color}</p>
        <p>Color bar set my layer form</p>
      </div>
      <div>
        <p>Height: {oneLayer.height} </p>
        <p>Width{oneLayer.width} </p>
      </div>
      <button onClick={() => deleteLayer(index)}>Delete</button>
    </section>
  );
};
{
}

export default LayerBuilder;
