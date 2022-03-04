import React from 'react'
import { VariablesContext } from '../../context/VariablesProvider'

const Contacto = () => {


    const {variables} = React.useContext(VariablesContext)



    return (
        <>
           
                <section id="contact" className='dark-color'>
                        <div className="container wow fadeInUp">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="section-title dark-color-title">{variables.tituloUbicacion}</h3>
                                    <div className="section-title-divider"></div>
                                    
                                </div>
                            </div>

                            <div className="row justify-content-center">
                            
                                <div className="info" align="center">
                                    <div>
                                    
                                    
                                        
                                        <iframe 
                                            src={variables.iframeUbicacion}
                                            frameBorder="0" 
                                            allowFullScreen
                                            title={variables.iframeAlt}
                                            className='iframe'
                                            >
                                        </iframe>                
                                    
                                        <div className="logos">
                                            
                                                <i className="bi bi-geo-alt-fill margin-icono-ubicacion"></i> 
                                                <div className='ms-3 dark-color-title'>{variables.direccion}</div>
                                                

                                        </div>
                                            {/* <div className='logos logo-consultas'>
                                                <i className="bi bi-envelope-fill margin-icono-mail-responsive"></i>
                                                <div className='ms-3'><a className='consultas' href={variables.mailTo}>{variables.mail}</a></div>

                                            
                                            </div> */}
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        
                </section>
        </>
    )
}

export default Contacto
