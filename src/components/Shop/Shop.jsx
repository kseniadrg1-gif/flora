import React, { useRef } from "react";
import "./Shop.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Why from "./sections/Why";
import Types from "./sections/Types";
import Products from "./sections/Products";
import Care from "./sections/Care";
import Footer from "./sections/Footer";

// Данные для товаров (прямо здесь, без отдельного файла)
const leafyPlants = [
  { name: "Замиоулькас", price: "5000Р" },
  { name: "Лист Скрипки Рис", price: "5000Р" },
  { name: "Пальма Кентини", price: "5000Р" },
  { name: "Черное растение ZZ", price: "5000Р" },
];

const succulents = [
  { name: "Большой Перуанский Яблоневый Кактус", price: "3500Р" },
  { name: "Растение Процветания Слонового Куста", price: "3500Р" },
  { name: "Prickly Pear Cactus 'Joseph's Coat'", price: "3500Р" },
  { name: "Rhipsalis Baccifera Mistletoe Cactus", price: "3500Р" },
];

const trees = [
  { name: "Крупное растение Юкки", price: "4500Р" },
  { name: "Лимонное дерево", price: "4500Р" },
  { name: "Крупная Драцена Тростниковая", price: "5000Р" },
  { name: "Дерево Dragaena Marginata", price: "5000Р" },
];

export default function Shop() {
  const productsRef = useRef(null);
  const careRef = useRef(null);

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
        <Products
          ref={productsRef}
          title="ЛИСТВЕННЫЕ"
          description="создают уютную атмосферу благодаря своей пышной зелени и разнообразию форм, идеально подходя для любого интерьера"
          plants={leafyPlants}
        />
        <Products
          title="СУККУЛЕНТЫ"
          description="Они умеют целый месяц обходиться без влаги, не боятся яркого солнца, растут на камнях и скалах, где совсем нет плодородной почвы"
          plants={succulents}
        />
        <Products
          title="КОМНАТНЫЕ ДЕРЕВЬЯ"
          description="они помогают людям чувствовать себя ближе к природе, особенно в городской среде"
          plants={trees}
        />
        <Care ref={careRef} />
      </div>
      <Footer />
    </>
  );
}
