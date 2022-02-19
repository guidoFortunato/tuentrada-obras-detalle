import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { Link, useParams } from "react-router-dom"
import rapsodia from '../../img/rapsodia.jpg'
import { VariablesContext } from '../../context/VariablesProvider'
import Loader from '../main/Loader/Loader';
import MessageError from '../error/MessageError';
import Tabla from './Tabla'
import Alojamiento from './Alojamiento'



const DetalleEvento = (props) => {
    
    const [eventos, setEventos] = useState([]);
    const [precios, setPrecios] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    


    const {variables} = React.useContext(VariablesContext)

    // const ubicaciones = ['Butaca preferencial', 'Preferencial 1 y 2', 'Mesas centrales']
    const ubicaciones = [
        {
        ubicacion: 'Butaca preferencial',
        precio: '1600',
        servicio: '160'
        },
        {
        ubicacion: 'Preferencial 1 y 2',
        precio: '1500',
        servicio: '150'
        },
        {
        ubicacion: 'Mesas centrales',
        precio: '1200',
        servicio: '120'
        },
        
    ]
    // const precioUbi = ['1600 + 160', '1500 + 150', '1200 + 120']



    const {id} = useParams()

    const comprar = ()=>{
        console.log('click en comprar')
    }
    

    useEffect(()=>{
        setLoading(true)

        const getData = async ()=>{
            const url = 'https://api.tuentrada.com/api/venue?venue=obras'
            const token = '3|ruU31fAttxU0FKWmvV8pdB1GCyhQa7lNAQwBfEVb'

            try {
                const res = await fetch(url, {

                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
        
                })
                
                
                // eslint-disable-next-line no-throw-literal
                if (!res.ok) throw {
                    err: true,
                    status: res.status || "00", 
                    statusText: res.statusText || "Error al intentar acceder al servidor"
                }

               
                const data = await res.json()

                 /*
                no funciona el manejo de error
               
                if (!res.ok) throw {
                    err: true,
                    status: res.status || "00", 
                    statusText: res.statusText || "Ocurrió un error"
                }
                */

                
                // console.log(data)
                setEventos(data)
                
            } catch (err) {
                console.log('error',err)
                if (err) {
                    setError(err)
                }    
            }
            

           
            setLoading(false)
        }
        
        getData()
    }, [])




    return loading ? <Loader /> : (
        <>

            <nav  className="navbar navbar-expand-lg navbar-dark navbar-active sticky-top mb-5">
                <div className="container">
                    <Link to='/'>
                        <img className='cursor' src={variables.logo} style={{width: '277px', height: '89px'}} alt={variables.altLogo} />
                    </Link>
                    <a href="https://www.tuentrada.com/" target='_blank' rel='noreferrer'>
                            <img src={variables.logoTuentrada} style={{width: 'auto', height: 'auto'}} alt={variables.altLogoTuen} />
                    </a>
                    
                    
                    {/* <button 
                        className="btn btn-dark ms-auto"
                        onClick={()=>props.history.push('/')}
                    >
                        {variables.volver}
                    </button> */}
                    
                </div>
            </nav>

        
            <div className="container">
                <h1 className='titulo-evento-detalle'>Id del evento: {id}</h1> 
                <hr />
                <div className="row mb-5">
                    <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                        <img src='https://www.tuentrada.com/images/620bd1f8a9285.webp' alt="imagen evento" className='img-evento' />
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
                        
                        
                        
                    </div>
                    
                            
                        
                </div>

               
                    <div className="col-12">

                        <h2>Título descripción</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero itaque minus aut placeat fugit dolore quod cumque, repudiandae exercitationem eligendi molestias debitis iure. Vitae optio veniam fuga molestias maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit praesentium totam molestias accusamus quibusdam adipisci, possimus a magnam omnis aspernatur veniam dolore perspiciatis debitis reprehenderit excepturi, officia sit, facere rerum?
                        </p>
                        <div className='container-button'>
                            <button 
                                    className="btn color-comprar w-25 mb-2 text-white animacion-boton"
                                    onClick={()=>comprar()}
                                >
                                    <span className='fw-bold'>Comprar</span>
                            </button>
                            
                        </div>
                        <div className='container-button mb-5'>
                            <button 
                                className="btn w-25 color-volver animacion-boton"
                                onClick={()=>props.history.push('/')}
                            >
                                <span className='fw-bold'>{variables.volver}</span>
                            </button>                            
                        </div>
                        
                    </div>
               
               
                    <div className="col-12 mb-5">

                        <h2 className='titulo__ubicacion-precios'>Ubicación y precios</h2>
                        <hr className='hr-evento-detalle' />

                       <Tabla ubicaciones={ubicaciones} />


                        
                    </div>
                    <div className="col-12 mb-5">

                        <h2 className='titulo__ubicacion-precios'>Elegí tu alojamiento</h2>
                        <hr className='hr-evento-detalle' />

                        <Alojamiento />

                       


                        
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
