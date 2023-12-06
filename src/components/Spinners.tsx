// import ClipLoader from "react-spinners/ClipLoader";
import Spinner from "react-bootstrap/Spinner";
import { CSSProperties } from "react";

const spinnerParentStyle: CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const spinnerChildStyle: CSSProperties = {
  width: "10rem",
  height: "10rem",
};

const Spinners = () => {
  return (
    <div style={spinnerParentStyle}>
      <Spinner animation="border" variant="danger" style={spinnerChildStyle} />
    </div>
  );
  //   return <Spinner style={spinnerStyle} animation="border" variant="danger" />;
};

export default Spinners;
