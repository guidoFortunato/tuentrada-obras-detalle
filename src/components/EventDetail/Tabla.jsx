import React, { useEffect, useState } from 'react'
import Loader from '../main/Loader/Loader';


const Tabla = ({info}) => {

    // let datos = []
    const [loading, setLoading] = useState(true);
    const [datos, setDatos] = useState([]);

    // const datos = []
        

   

    useEffect(() => {

        
        
       
            for (let i = 0; i < info.location.length; i++) {
                // setDatos([
                //      ...datos,{ubicacion: info.location[i], precio: info.price[i], servicio: info.charge[i]}
                // ])                
                datos.push({ubicacion: info.location[i], precio: info.price[i], servicio: info.charge[i] })
                
            }
           
            
            // -datos siendo un array normal no se pintaban en la tabla, siendo un estado si
            // -por que nunca se iba el loader cuando datos era un arreglo comun
            // - por que no puedo rellenar asi el array: setDatos([...datos,{ubicacion: info.location[i], precio: info.price[i], servicio: info.charge[i]} ])
            // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. (esto pasa cuando toco en boton comprar del evento)
            
            
           
            
            setLoading(false)
        }, []);
        
    
    

  return loading ? <Loader /> :  (
    <table className="table">
        <thead className='cabecera-tabla'>
            <tr>
            <th scope="col" className='text-white'>Ubicación</th>
            <th scope="col" className='text-white'>Precio + servicio</th>
            
            </tr>
        </thead>
        <tbody>

                        {
                        
                            loading === false ?  datos.map((item,index) => (
                                <tr key={index}>
                                    <td className='fw-bold'>{item.ubicacion}</td>                           
                                    <td className='fw-bold color-precio'> $<span>{item.precio}</span> + $<span>{item.servicio}</span></td>                           
                                </tr>
                            )) : null
                        }
  



            
                                        
                        {/* {
                            info.location.map((item,index) => (
                                <tr key={index}>
                                    <td className='fw-bold' >{item}</td>
                                    
                                </tr>
                            ))
                            
                        } */}
                        {/* {

                            info?.price?.map((item,index)=>(
                                
                                    <td className='color-precio fw-bold' >{item}</td>
                                
                            ))
                        } */}
                  
              
           

            
            
        </tbody>
    </table>
  )
}

export default Tabla