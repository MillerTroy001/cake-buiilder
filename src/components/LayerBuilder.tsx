import Layer from "../models/Layer";
import LayerAdd from "./LayerAdd";
import "./LayerBuilder.css";
interface Props {
  oneLayer: Layer;
  index: number;
  deleteLayer: (index: number) => void;
  addLayer: (newLayer: Layer, index: number) => void;
}
const LayerBuilder = ({ oneLayer, index, deleteLayer, addLayer }: Props) => {
  return (
    <section className="LayerBuilder">
      <LayerAdd addLayer={addLayer} index={index} />
      <div className="colorInfo">
        <p>Color: </p>
        <div
          style={{ backgroundColor: oneLayer.color }}
          className="colorbox"
        ></div>
      </div>
      <div>
        <div className="heightInfo">
          <p>Height: </p>
          <div>{oneLayer.height}</div>
          <div className="boxOutline">
            <div
              className="heightBox"
              style={{ width: oneLayer.height * 10 + "%" }}
            ></div>
          </div>
        </div>
        <div className="widthInfo">
          <p>Width: </p>
          <div>{oneLayer.width}</div>
          <div className="boxOutline">
            <div
              className="widthBox"
              style={{ width: oneLayer.width * 10 + "%" }}
            ></div>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-trash" onClick={() => deleteLayer(index)}></i>
    </section>
  );
};

{
}

export default LayerBuilder;
