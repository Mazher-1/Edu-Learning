import React from "react";
import Navbar from "./components/NavBar/Navbar";

import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer '/>
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Students Says'/>
        <Testimonials />
        <Title subTitle='Contact US' title='Get in Touch'/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};


export default App;
