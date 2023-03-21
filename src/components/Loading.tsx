import img from "../assets/loading.gif";

function Loading() {
  return (
    <div className="loading">
      <img src={img} alt="loading..." />
    </div>
  );
}

export default Loading;
