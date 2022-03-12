import React from 'react';
import Footer from '../footer/Footer';
import Contacto from '../main/Contacto';
import Eventos from '../main/Eventos';
import Imagenes from '../main/Imagenes';
import Section from '../main/Section';
import SectionHistoria from '../main/SectionHistoria';
import Navbar from '../Navbar/Navbar';


const Home = () => {
  return (
      <>
        <Navbar/>
        <Section />
        <Eventos />
        <SectionHistoria />
        <Imagenes />
        <Contacto />
        <Footer /> 
      </>
  )
};

export default Home;
