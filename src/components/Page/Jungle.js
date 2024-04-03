import React from "react";
import Header from "../Header.js";
import Nav from "../Nav.js";
import Footer from "../Footer.js";


export default function Jungle() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center ">

    </div>
    <div class="d-grid col-1 mx-auto mt-3 mb-3">
    <a class="btn btn-primary" href='/formulaire' role='button'>Contact</a>
    </div>
    <Footer></Footer>
    </>
  )
}