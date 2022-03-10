import React from 'react'
import { Link } from 'react-scroll'

import { VariablesContext } from '../../context/VariablesProvider'

const Section = () => {

    const {variables} = React.useContext(VariablesContext)
    return (
        <>
            <section id="hero">
                <div className="hero-container">
                <div className="wow fadeIn">
                    <div className="hero-logo">
                    {/* <img src={variables.logo} alt={variables.altLogo} /> */}
                    </div>
                    <div>
                        <h1>{variables.tituloInicio}</h1>
                    </div>
                    
                    <div className="actions" align="center">
                        <Link to="team" className="btn btn-get-started">{variables.botonInicio}</Link>
                    </div>
                
                </div>
                </div>
            </section>
        </>
    )
}

export default Section
