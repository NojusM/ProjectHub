import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";

const Home = lazy(() => import("./pages/home/Home"));
const CardGame = lazy(() => import("./pages/cardGame/CardGame"));
const ColorGame = lazy(() => import("./pages/colorGame/ColorGame"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Pokeshop = lazy(() => import("./pages/pokeShop/Pokeshop"));
const BadRoute = lazy(() => import("./components/BadRoute"));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cards" element={<CardGame />} />
          <Route path="/colors" element={<ColorGame />} />
          <Route path="/pokeshop" element={<Pokeshop />} />
          <Route path="*" element={<BadRoute />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
