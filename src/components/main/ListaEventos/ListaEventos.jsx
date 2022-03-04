import React from 'react'
import { Link } from 'react-router-dom'
import './listaEventos.css'

const ListaEventos = ({id, title, image, date, time, buy}) => {

    //Dia
    const fechaCambioFormato = 20 + date.split('-')[2]+ '-' + date.split('-')[1] + '-' + date.split('-')[0]
    const daysNames = ['LUN','MAR','MIER','JUE','VIER','SAB','DOM'];
    const numeroDia = new Date(fechaCambioFormato).getDay()

   
    
    // Mes
    const monthNames = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
    const numeroMes = Number(date.split('-')[1] - 1)

    return (
        <>                                       
                    
                        <div className="card dark-color-cards dark-scale">                                            
                            <img src={`https://tuentrada.com/${image}`} className="card-img-top" alt={title} />
                            <div className="card-body">                                                
                                <h6 className='card-title'>{title}</h6>
                                <hr />


                                <div className="container-tuentrada">

                                    <div className="container-tuentrada__col1 me-5">               

                                
                                       
                                            
                                        
                                            {/* <span className='fw-bold'>SAB</span> */}
                                            <span className='fw-bold'>{daysNames[numeroDia]}</span>
                                            
                                       
                                      
                                        
                                            {/* {console.log(date.split('-')[0]) } */}
                                            <span className='fecha-tuen'>{date.split('-')[0]}</span>
                                     
                                        
                                        
                                            
                                            <span className='fw-bold'> {monthNames[numeroMes]} 20{date.split('-')[2]}</span>
                                        

                                    </div>
                                
        
                                
                                    <div className="container-tuentrada__col2">

                                        
                                        {/* <a
                                            className="btn btn-primary btn-color mt-4"
                                            rel="noreferrer"
                                            target='_blank'
                                            href={buy}
                                            
                                            >
                                            Comprar
                                        </a> */}
                                        <Link
                                            className="btn btn-primary btn-color mt-4 animacion-boton"
                                            to={`/${id}`}
                                            
                                            >
                                            Comprar
                                        </Link>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                   
        </>
    )
}

export default ListaEventos
