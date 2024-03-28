import React from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import Animaux from "../components/Page/Animaux.js";

export default function Parc() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Animaux></Animaux>
    <div class="d-grid col-1 mx-auto mt-3 mb-3">
    <a class="btn btn-primary" href='/formulaire' role='button'>Contact</a>
    </div>
    <Footer></Footer>
    </>
  )
}