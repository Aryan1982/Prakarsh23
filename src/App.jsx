import React, { Suspense } from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Glimps from "./components/Glimps/Glimps";
import Team from "./components/Team/Team";
import Event from "./components/Events/Event";
import Sponsor from "./components/Sponsor/Sponsor";
const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Nav />
        <Home />
        <About />
        <Event />
        <Team />
        <Sponsor />
        <Glimps />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
