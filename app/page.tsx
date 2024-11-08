"use client";

import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("./Components/Header"), {
  ssr: false,
});

const HomeComponent = dynamic(() => import("./Components/Home"), {
  ssr: false,
});

export default function page() {
  return (
    <>
      <HeaderComponent />
      <HomeComponent />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
