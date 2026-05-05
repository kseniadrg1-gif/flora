import React from "react";
import Products from "./Products";
import { leafyPlants, succulents, trees } from "../data/productsData";

export default function AllProducts({ productsRef }) {
  return (
    <>
      <Products
        id="leafy"
        ref={productsRef}
        title="ЛИСТВЕННЫЕ"
        description="создают уютную атмосферу благодаря своей пышной зелени и разнообразию форм, идеально подходя для любого интерьера"
        plants={leafyPlants}
      />
      <Products
        id="succulents"
        title="СУККУЛЕНТЫ"
        description="Они умеют целый месяц обходиться без влаги, не боятся яркого солнца, растут на камнях и скалах, где совсем нет плодородной почвы"
        plants={succulents}
      />
      <Products
        id="trees"
        title="КОМНАТНЫЕ ДЕРЕВЬЯ"
        description="они помогают людям чувствовать себя ближе к природе, особенно в городской среде"
        plants={trees}
      />
    </>
  );
}
