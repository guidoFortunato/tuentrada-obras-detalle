import React from 'react'
import { VariablesContext } from '../../context/VariablesProvider'

const Footer = () => {

    const {variables} = React.useContext(VariablesContext)


    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="credits">
                                {variables.venueName} 
                                <a 
                                href={variables.linkTuentrada} 
                                target="_blank"
                                rel="noreferrer"
                                className='ms-2'
                                >
                                    {variables.tuentradaName}
                                </a>
                            </p>
                            <div className="text-center">
                                <a href={variables.linkVenueFb} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-facebook m"></i></a>
                                <a href={variables.linkVenueTw} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-twitter"></i></a>
                                <a href={variables.linkVenueIg} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-instagram"></i></a>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>
            </footer>            
        </>
    )
}

export default Footer
