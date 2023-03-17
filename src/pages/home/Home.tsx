import "./home.css";
import img from "../../assets/me.png";

function Home() {
  return (
    <div className="center home">
      <h1>Hello!</h1>
      <img src={img} alt="loading..." />
      <p>Welcome to my demo project page</p>
      <p>
        <b>By Nojus Makulavičius</b>
      </p>
    </div>
  );
}

export default Home;
