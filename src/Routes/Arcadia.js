import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Histoire from "../components/Page/Histoire";
import Top from "../components/styles/Logo/Accessoire/to_top.png"

export default function Arcadia() {
  return (
    <>
      <a id="top" href="top"> </a>
        <a href="#top" >
          <img src={Top} class="" alt="" style={{position: "fixed", bottom : "50px", right: "10px", opacity: 0.5}}/>
      </a>
    <Header></Header>
      <Nav></Nav>
        <Histoire></Histoire>
        <Footer></Footer>
    </>
  )
}