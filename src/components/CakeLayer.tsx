import Layer from "../models/Layer";
import "./CakeLayer.css";

interface Props {
  //   arrayOfCakeLayers: Layer[];
  singleLayer: Layer;
}

const CakeLayer = ({ singleLayer }: Props) => {
  return (
    <section className="CakeLayer">
      <div
        className="SingleCakeLayer"
        style={{
          height: singleLayer.height * 40,
          width: singleLayer.width * 40,
          backgroundColor: singleLayer.color,
        }}
      ></div>
    </section>
  );
};

export default CakeLayer;
