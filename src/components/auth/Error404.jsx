import React from 'react'
import './error404.css'
import error404 from '../../img/error404.jpg'
import { useHistory } from 'react-router-dom'

const Error404 = () => {

    const history = useHistory()

    const volver = ()=> history.push('/')
    return (
        <div className='error404-container'>
            <div className='mb-5'>
                <img src={error404} alt="error 404" />
            </div>
            <div>
                <button 
                    className='btn btn-primary'
                    onClick={volver}
                >
                    Volver al Home
                </button>                
            </div>
        </div>
    )
}

export default Error404
