import React, { useEffect, useState } from 'react'
import Loader from '../main/Loader/Loader';


const Tabla = ({info}) => {

    // console.log(info)

   
    const [loading, setLoading] = useState(true);
    const [datos, setDatos] = useState([]);

    
    
    
    useEffect(() => {

        
        
       
            for (let i = 0; i < info.location.length; i++) {
                // setDatos([
                //      ...datos,{ubicacion: info.location[i], precio: info.price[i], servicio: info.charge[i]}
                // ])                
                // datos.push({ubicacion: info.location[i], precio: info.price[i], servicio: info.charge[i] })
                setDatos(prev => ([...prev, {ubicacion: info.location[i], precio: info.price[i], servicio: info.charge[i]}]))

                // cuando un setState recibe una funcion en vez de un valor, el primer parameto va a ser el estado anterior
                
            }


           
            
           
            
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
                        
                            datos.map((item,index) => (
                                <tr key={index}>
                                    <td className='fw-bold'>{item.ubicacion}</td>                           
                                    <td className='fw-bold color-precio'> $<span>{item.precio}</span> + $<span>{item.servicio}</span></td>                           
                                </tr>
                            ))
                        }

                        {/* {
                            info.location.map((location, index) => (
                                <tr key={index}>
                                  <td className='fw-bold'>{location}</td>
                                  <td className='fw-bold color-precio'>$ {info.price[index]} + $ {info.charge[index]}</td>
                                </tr>
                              ))
                        } */}
              
           

            
            
        </tbody>
    </table>
  )
}

export default Tabla