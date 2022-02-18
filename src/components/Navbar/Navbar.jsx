import React, { useContext, useState } from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import { Link } from "react-scroll";
import { VariablesContext } from '../../context/VariablesProvider'

const Navbar = () => {

    const {variables} = useContext(VariablesContext)
    const [navbar, setNavbar] = useState(false);

    const changeBackground = ()=>{
        
        if(window.scrollY >= 200){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    
  
    return (
        <Router>

           

            {/* <nav className={scrollNav > 0 ? "navbar navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar navbar-expand-lg navbar-dark fixed-top"}> */}
            <nav data-toggle="collapse" className={navbar ? "navbar navbar-expand-lg navbar-dark navbar-active fixed-top" : "navbar navbar-expand-lg navbar-dark fixed-top"}>
                <div className="container">

                        <a href="https://www.tuentrada.com/" target='_blank' rel='noreferrer'>
                            <img src={variables.logoTuentrada} style={{width: 'auto', height: 'auto'}} alt={variables.altLogoTuen} />
                        </a>
                    
                        {/* <img src={variables.logo} style={{width: '125px', height: '40px'}} alt={variables.altLogo} /> */}
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link 
                            className="nav-link cursor w-25 w-md-0" 
                            aria-current="page" 
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                        >
                                {variables.elementoNavbar1}
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            
                            className="nav-link cursor w-25 w-md-0" 
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                        >
                            {variables.elementoNavbar2}
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            
                            className="nav-link cursor w-25 w-md-0"  
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                        >{variables.elementoNavbar3}
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                             
                            className="nav-link cursor w-25 w-md-0" 
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                        >{variables.elementoNavbar4}
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
        </Router>
    )
}

export default Navbar
