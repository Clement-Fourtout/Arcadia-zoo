import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Vehicules from "../components/Page/Véhicules";
import Filtre from "../components/Page/Filtre";

export default function Occasions() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Filtre></Filtre>
    <Vehicules></Vehicules>
    <Footer></Footer>
    </>
  )
}