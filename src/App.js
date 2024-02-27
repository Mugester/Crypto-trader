import { Route, Routes } from "react-router-dom";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import CoinDetail from "./components/CoinDetail";
import Header from "./components/Header";
import OurModel from "./components/OurModel";
import AboutMe from "./components/AboutMe";

function App() {
  return (
<>
<Header/>
<Routes>
  <Route path="/brockers" element={ <Exchanges/>} />
  <Route path="/" element={ <OurModel/>} />
  <Route path="/coins" element={ <Coins/>} />
  <Route path="/coins/:id" element={ <CoinDetail/>} />
  <Route path="/aboutme" element={ <AboutMe/>} />
</Routes>
</>
  );
}

export default App;
