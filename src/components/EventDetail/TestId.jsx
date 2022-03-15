import React from 'react'
import { Redirect, Route } from 'react-router'
import { useParams } from 'react-router-dom';
// import { LoginContext } from '../context/LoginProvider'

const TestId = ({ component: Component, ...rest }) => {

    const { id } = useParams()
    console.log(id)

    return (
        <Route {...rest}>{id ? <Component /> : <Redirect to='/' />}</Route>
    )
}

export default TestId
