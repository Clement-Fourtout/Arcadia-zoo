import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Diffservices from "../components/Page/DiffServices";
import Top from "../components/styles/Logo/Accessoire/to_top.png"

export default function Services() {
  return (
    <>
    <a id="top" href="top"> </a>
      <a href="#top">
        <img src={Top} class="" alt="" style={{position: "fixed", bottom : "50px", right: "10px", opacity: 0.5}}/>
      </a>
        <Header></Header>
          <Nav></Nav>
            <Diffservices></Diffservices>
            <Footer></Footer>

    </>
  )
}