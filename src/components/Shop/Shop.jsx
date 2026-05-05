import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Shop.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Why from "./sections/Why";
import Types from "./sections/Types";
import AllProducts from "./sections/AllProducts";
import Care from "./sections/Care";
import Footer from "./sections/Footer";

export default function Shop() {
  const location = useLocation();
  const productsRef = useRef(null);
  const careRef = useRef(null);

  // Скролл к разделу "ЛИСТВЕННЫЕ" ТОЛЬКО если пришли с доставки
  useEffect(() => {
    if (location.state?.scrollTo === "leafy") {
      setTimeout(() => {
        productsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      // Очищаем state, чтобы при обновлении страницы не скроллило
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCare = () => {
    careRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="page">
        <Header onCatalogClick={scrollToProducts} onCareClick={scrollToCare} />
        <Hero onSelectPlant={scrollToProducts} />
        <Why />
        <Types />
        <AllProducts productsRef={productsRef} />
        <Care ref={careRef} />
      </div>
      <Footer />
    </>
  );
}
