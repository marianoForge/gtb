import Head from "next/head";

import Menu from "../components/layout/Menu";
import Hero from "../components/Hero";
import Tiendas from "../components/Tiendas";
import Nosotros from "../components/Nosotros";
import Servicios from "../components/Servicios";
import Tarifas from "../components/Tarifas";
import Contacto from "../components/Contacto";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Global Trade Box</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Hero />
      <Tiendas />
      <Nosotros />
      <Servicios />
      <Tarifas />
      <Contacto />
      <Footer />
    </>
  );
}
