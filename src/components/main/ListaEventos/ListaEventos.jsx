import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { VariablesContext } from '../../../context/VariablesProvider';
import './listaEventos.css'

const ListaEventos = ({id, title, image, date, time, buy}) => {

    const { setIdEvent } = React.useContext(VariablesContext);
    const [dataEventos, setDataEventos] = useState([]);
    const history = useHistory();

    
    const newTitle = title.split(' ').join('-').toLowerCase()
    

    // Dia
    const fechaCambioFormato = 20 + date.split('-')[2]+ '-' + date.split('-')[1] + '-' + date.split('-')[0]
    
    const daysNames = ['LUN','MAR','MIER','JUE','VIER','SAB','DOM'];
    const numeroDia = new Date(fechaCambioFormato).getDay()

   
    
    // Mes
    const monthNames = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
    const numeroMes = Number(date.split('-')[1] - 1)

    // const idEvento = (id)=>{

    //     setIdEvent(id)
      
    //     const getData = async () => {
    //             const url = `https://api.tuentrada.com/api/event?event=${id}`;
    //             const token = process.env.REACT_APP_TOKEN_OBRAS;
                
    //             try {
    //                 const res = await fetch(url, {
    //                     method: 'GET',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         Authorization: `Bearer ${token}`,
    //                     },
    //                 });
    
    //                 const data = await res.json();
    //                 console.log(data.length)


                    


                    
    //             } catch (err) {
    //                 console.log('error', err);
    //                 // setError(err);
    //                 history.push('/error');
    //             }
    //         };
    //         getData()
 
    
       
    // }
    

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
                                            <span className='fw-bold tamaño-letra-fecha'>{daysNames[numeroDia]}</span>
                                            
                                       
                                      
                                        
                                            {/* {console.log(date.split('-')[0]) } */}
                                            <span className='fecha-tuen'>{date.split('-')[0]}</span>
                                     
                                        
                                        
                                            
                                            <span className='fw-bold tamaño-letra-fecha'> {monthNames[numeroMes]} 20{date.split('-')[2]}</span>
                                        

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
                                            to={`/${newTitle}/${id}`}       
                                            // onClick={()=>idEvento(id)}                                  
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
