import "./Cake.css";
import CakeLayer from "./CakeLayer";
import Layer from "../models/Layer";

interface Props {
  arrayOfLayers: Layer[];
}

const Cake = ({ arrayOfLayers }: Props) => {
  return (
    <div className="Cake">
      <div className="theLayers">
        {arrayOfLayers.map((obj) => (
          <CakeLayer key={obj.width} singleLayer={obj} />
        ))}
      </div>
      <div className="silverPlatter"></div>
    </div>
  );
};

export default Cake;

{
  /* <CakeLayer arrayOfCakeLayers={layers} /> */
}
