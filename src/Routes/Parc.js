import React from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import Animaux from "../components/Page/Habitats.js";

export default function Parc() {
  return (
    <>
      <Header></Header>
        <Nav></Nav>
          <Animaux></Animaux>
          <Footer></Footer>
    </>
  )
}