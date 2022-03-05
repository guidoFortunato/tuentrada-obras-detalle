import React from 'react'

const Precio = ({info}) => {
    console.log(info.price)
  return (

    <>

        {
            info.price.map(item => (
                <td className='fw-bold' >{item}</td>
            ))
            
        }
    </>
  )
}

export default Precio