import img from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img src={img} alt="loading..." />
    </div>
  );
}
