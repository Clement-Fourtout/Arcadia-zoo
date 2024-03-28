import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Diffservices from "../components/Page/DiffServices";

export default function Services() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Diffservices></Diffservices>
    <div class="d-grid col-1 mx-auto mt-3 mb-3">
    <a class="btn btn-primary" href='/formulaire' role='button'>Nous contacter</a>
    </div>
    <Footer></Footer>

    </>
  )
}