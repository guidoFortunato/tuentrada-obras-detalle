import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { Link, useParams } from "react-router-dom"
import { Get } from '../services/privateApiService'
import rapsodia from '../../img/rapsodia.jpg'
import { VariablesContext } from '../../context/VariablesProvider'



const DetalleEvento = (props) => {

    const [eventos, setEventos] = React.useState([])



    const {variables} = React.useContext(VariablesContext)



    const {id} = useParams()

    const comprar = ()=>{
        console.log('click en comprar')
    }
    

    useEffect(()=>{
        
        

        const getData = async ()=>{
            // const url = process.env.REACT_APP_API_OBRAS 
            const url = 'https://api.tuentrada.com/api/venue?venue=astral' 

            try {

                const response = await Get(url)               
                setEventos(response)


            } catch (error) {
                console.log(error)
            }

        }
        
        getData()
    }, [])




    return (
        <>

            <nav  className="navbar navbar-expand-lg navbar-dark navbar-active sticky-top">
                <div className="container">
                    <Link to='/'>
                        <img className='cursor' src={variables.logo} style={{width: '125px', height: '40px'}}alt={variables.altLogo} />
                    </Link>
                    
                    
                    <button 
                        className="btn btn-dark ms-auto"
                        onClick={()=>props.history.push('/')}
                    >
                        {variables.volver}
                    </button>
                    
                </div>
            </nav>

        
            <div className="container mt-2 ">
                <h1 className='titulo-evento-detalle'>Id del evento: {id}</h1> 
                <hr className='hr-evento-detalle'/>
                <div className="row">
                    <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                        <img src={rapsodia} alt="imagen evento" className='img-evento' />
                    </div>
                    <div className="col-12 col-lg-6 espacio">
                        <div className="fecha-hora size-datos mb-2">
                            {/* <i className="bi bi-calendar2-check-fill color-icono me-2"></i> */}
                            <i className="bi bi-geo-alt-fill color-icono me-2"></i>
                            <span className='fecha-hora__color-texto'>Lugar: </span>
                            <span className='ms-1'>Estadio Obras</span>
                        </div>
                        <div className="fecha-hora size-datos mb-2">
                            <i className="bi bi-geo-alt-fill color-icono me-2"></i>
                            <span className='fecha-hora__color-texto'>Ciudad: </span>
                            <span className='ms-1'>CABA</span>
                        </div>
                        <div className="fecha-hora size-datos mb-2">
                            <i className="bi bi-calendar-check color-icono me-2"></i>
                            <span className='fecha-hora__color-texto'>Fecha:</span>
                            <span className='ms-1'>18-12-2021</span>
                        </div>
                        <div className="fecha-hora size-datos mb-2">
                            <i className="bi bi-clock-history color-icono me-2"></i>
                            <span className='fecha-hora__color-texto'>Hora:</span>
                            <span className='ms-1'>21:00 hs</span>
                        </div>
                        <div className="fecha-hora size-datos mb-2">
                            <i className="bi bi-grid color-icono me-2"></i>
                            <span className='fecha-hora__color-texto'>Categoría:</span>
                            <span className='ms-1'>Conciertos</span>
                        </div>
                        <div className="fecha-hora size-datos mb-2">
                            <i className="bi bi-geo-alt-fill color-icono me-2"></i>
                            <span className='fecha-hora__color-texto'>Dirección:</span>
                            <span className='ms-1'>Av. del Libertador 7395</span>
                        </div>
                        <div className="fecha-hora size-datos mb-4">
                            <i className="bi bi-door-open color-icono me-2"></i>
                            <span className='fecha-hora__color-texto'>Apertura puertas:</span>
                            <span className='ms-1'>19:00 hs</span>
                        </div>
                        <div className='container-button'>
                            <button 
                                    className="btn btn-warning boton"
                                    onClick={()=>comprar()}
                                >
                                    <span className='boton-comprar'>Comprar</span>
                            </button>
                        </div>
                        
                        
                        
                    </div>
                    
                            
                        
                </div>

                <div className="row">
                    <div className="col-12 col-lg-6 mt-3">

                        <h2>Descripcion</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero itaque minus aut placeat fugit dolore quod cumque, repudiandae exercitationem eligendi molestias debitis iure. Vitae optio veniam fuga molestias maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit praesentium totam molestias accusamus quibusdam adipisci, possimus a magnam omnis aspernatur veniam dolore perspiciatis debitis reprehenderit excepturi, officia sit, facere rerum?
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-3 d-flex justify-content-center">

                        <h2 className=''>PRECIOS</h2>
                        
                    </div>
                </div>
            </div>
{/*  */}


        
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="credits">
                            {variables.venueName} 
                            <a 
                            href={variables.linkTuentrada} 
                            target="_blank"
                            rel="noreferrer"
                            className='ms-1'
                            >
                                {variables.tuentradaName}
                            </a>
                        </p>
                        <div className="text-center pb-1">
                            <a href={variables.linkVenueFb} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-facebook m"></i></a>
                            {/* <a href={variables.linkVenueTw} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-twitter"></i></a> */}
                            <a href={variables.linkVenueIg} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-instagram"></i></a>
                        </div>
                    
                    
                    </div>  

                </div>
            </div>
        </footer>
    </>
    )
}

export default withRouter(DetalleEvento)
