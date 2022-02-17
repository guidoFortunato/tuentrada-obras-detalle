import React from 'react'
import portfolio1 from '../img/portfolio1.webp'
import portfolio2 from '../img/portfolio2.webp'
import portfolio4 from '../img/portfolio4.webp'
import portfolio5 from '../img/portfolio5.webp'
import portfolio7 from '../img/portfolio7.webp'
import portfolio8 from '../img/portfolio8.webp'
import portfolio9 from '../img/portfolio9.webp'
import obras2 from '../img/obras2.webp'
import obras3 from '../img/obras3.webp'
import logo from '../img/logo.png'
import obras5 from '../img/obras5.webp'

export const VariablesContext = React.createContext()

const VariablesProvider = (props) => {


    const variablesGlobales = {
        iframeUbicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.341801732421!2d-58.46014958468972!3d-34.544900261895556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb426ba8c1e9b%3A0x45305aa2ca115efa!2sEstadio%20Obras%20Sanitarias!5e0!3m2!1ses!2sar!4v1617032475813!5m2!1ses!2sar',
        tituloUbicacion: 'Ubicación',
        direccion: 'Av. del Libertador 7395 - CABA',
        mailTo: 'mailto:consultas@foh-sa.com',
        mail: 'consultas@foh-sa.com',
        iframeAlt: 'mapa obras',
        logo: logo,
        altLogo: "logo obras",
        venueName: 'Estadio Obras',
        tuentradaName: 'tuentrada.com',
        linkTuentrada: "https://tuentrada.com",
        linkVenueFb: "https://www.facebook.com/EstadioObras",
        linkVenueTw: "https://twitter.com/EstadioObras",
        linkVenueIg: "https://www.instagram.com/estadioobras",
        volver: 'Volver',
        tituloEventos: 'PRÓXIMOS SHOWS',
        tituloImagenes: 'VIVÍ OBRAS',
        portfolioImg1: portfolio1,
        portfolioImg2: portfolio2,
        portfolioImg3: obras2,
        portfolioImg4: portfolio4,
        portfolioImg5: portfolio5,
        portfolioImg6: obras3,
        portfolioImg7: portfolio7,
        portfolioImg8: portfolio8,
        portfolioImg9: portfolio9,
        elementoNavbar1: 'Shows',
        elementoNavbar2: 'Historia',
        elementoNavbar3: 'Obras',
        elementoNavbar4: 'Ubicacion',
        tituloInicio: 'Bienvenidos al Templo del ROCK',
        botonInicio: 'SHOWS',
        tituloHistoriaArriba: '40 AÑOS DE HISTORIA',
        tituloHistoriaAbajo: 'DEL TEMPLO DEL ROCK',
        imagenHistoria: obras5,
        descripcion1: 'El estadio Obras Sanitarias, desde 1978 alberga a más 6.000 bandas y solistas argentinos e internacionales, con una capacidad de 4.700 espectadores. El logro de poder presentarse en el escenario de Obras para los artistas nacionales de cualquier género es sinónimo de consagración, es un antes y un después en la vida artística. Los años han demostrado que hay un sentimiento que con el paso del tiempo se intensifica y que no pierde nunca esa mística.',
        descripcion2: 'Las huellas de artistas y momentos que marcaron un antes y un después en un lugar emblema para Argentina. Presentaciones en vivo que terminaron siendo historias únicas, una de ellas fue en 1994 durante el show de B.B. King, cuando invitó a Pappo al escenario. Sin ir más lejos, este año Ciro Pertusi volvió a cantar con Attaque 77 y recientemente Ozzy Osbourne se despidió de Latinoamérica con su tour "No More Tours II".'
        
    }

    const [variables, setVariables] = React.useState(variablesGlobales)




    return (
        <VariablesContext.Provider value={{variables, setVariables}}>
            {props.children}
        </VariablesContext.Provider>
    )
}

export default VariablesProvider
