import React from 'react'
import { Redirect, Route } from 'react-router'
import { HashRouter, useParams } from 'react-router-dom';
// import { LoginContext } from '../context/LoginProvider'

const TestId = ({ component: Component, ...rest }) => {

    // const { id } = useParams()
    // console.log(id)

    return (
        <HashRouter>
            <Route {...rest}/>
        </HashRouter>

    )
}

export default TestId
