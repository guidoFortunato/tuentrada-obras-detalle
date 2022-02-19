import React from 'react'

const Tabla = ({ubicaciones, precioUbi}) => {
    // console.log(ubicaciones)
  return (
    <table className="table">
        <thead className='cabecera-tabla'>
            <tr>
            <th scope="col" className='text-white'>Ubicación</th>
            <th scope="col" className='text-white'>Precio + servicio</th>
            
            </tr>
        </thead>
        <tbody>

            {
                ubicaciones.map((item, index) => (
                    <tr key={index}>
                        <td className='fw-bold'>{item.ubicacion}</td>
                        <td className='color-precio fw-bold'>${item.precio} + ${item.servicio}</td>
                    </tr>
                ))
            }
            
            
        </tbody>
    </table>
  )
}

export default Tabla