import { useLocation } from "react-router";

const VisualizerId = () => {
  const location = useLocation();
  const { image } = location.state || {};

  return (
    <div>
      <h2>Visualizer</h2>
      {image ? (
        <img src={image} alt="Uploaded floor plan" style={{ maxWidth: "100%" }} />
      ) : (
        <p>No image data found.</p>
      )}
    </div>
  );
};

export default VisualizerId;