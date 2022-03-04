import React from 'react'

const Alojamiento = ({info}) => {
  
  const arrayDiasIn = []
  const arrayDiasOut = []

  // console.log((info.date.split(' ')[0]))
  const dia_primero = Number((info.date.split(' ')[0]).split('-')[0])
  const dia_segundo = Number((info.date.split(' ')[0]).split('-')[1])
  const dia_tercero_checkin = Number((info.date.split(' ')[0]).split('-')[2]) - 1
  const dia_tercero_checkout = Number((info.date.split(' ')[0]).split('-')[2]) + 1
  
  arrayDiasIn.push(dia_primero, dia_segundo, dia_tercero_checkin)
  arrayDiasOut.push(dia_primero, dia_segundo, dia_tercero_checkout)
 
  const checkin = arrayDiasIn.join('-')
  const checkout = arrayDiasOut.join('-')
  

  
  return (
    <iframe
    title={info.venue}
    src={`https://www.stay22.com/embed/gm?aid=tuentradaar&lat=${info.latitude}&lng=${info.longitude}&venue=Estadio Obras&checkin=${checkin}&checkout=${checkout}&maincolor=e10165&markerimage=https://www.tuentrada.com${info.image_125x125}&disableservices=restaurant`}
    id="stay22-widget" 
    width="100%" 
    height="600" 
    frameBorder="0" 
    >
    </iframe>
  )

  
}

export default Alojamiento