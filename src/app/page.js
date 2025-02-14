import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroAbt from "./components/HeroAbt";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Strategy from "./components/Strategy";
import StrategyCard from "./components/StrategyCard";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <HeroAbt/>
      <Strategy/>
      <Stories/>
      <Footer/>
    </div>
  );
}
