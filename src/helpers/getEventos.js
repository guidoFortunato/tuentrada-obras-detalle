export const getEventos = (eventos, id) => {
  return eventos.find( item => item.id === id )
}