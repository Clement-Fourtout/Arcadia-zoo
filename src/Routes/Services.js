import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DiffServices from "../components/DiffServices";

export default function Services() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <DiffServices></DiffServices>
    <div class="d-grid col-1 mx-auto mt-3 mb-3">
    <a class="btn btn-primary" href='/formulaire' role='button'>Nous contacter</a>
    </div>
    <Footer></Footer>

    </>
  )
}