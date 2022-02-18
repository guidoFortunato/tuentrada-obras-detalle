import React from 'react'

const Tabla = ({ubicaciones, precioUbi}) => {
    console.log(ubicaciones)
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
                ubicaciones.map(item => (
                    <tr>
                        <td className='fw-bold'>{item.ubicacion}</td>
                        <td className='color-precio fw-bold'>${item.precio} + ${item.servicio}</td>
                    </tr>
                ))
            }
            
            {/* <tr>
                <th>Butacas Preferenciales</th>
                <td>$1600 + $160</td>
                
            </tr>
            <tr>
                <th>Preferencial 1 y 2</th>
                <td>$2000 + $200</td>
                
            </tr>
                <tr>
                <th>Mesas Central 31 a 42</th>
                <td>$1700 + $170</td>
                
            </tr> */}
        </tbody>
    </table>
  )
}

export default Tabla