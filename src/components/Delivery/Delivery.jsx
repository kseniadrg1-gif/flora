import React from "react";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Form from "./sections/Form";
import FooterDelivery from "./sections/Footer";
import "./Delivery.css";

export default function Delivery() {
  return (
    <div className="delivery-page">
      <Hero />
      <Features />
      <About />
      <Stats />
      <Form />
      <FooterDelivery />
    </div>
  );
}
