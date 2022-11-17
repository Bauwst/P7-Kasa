import React, {useEffect} from "react"
import {NavLink} from "react-router-dom"
import '../styles/Error404.css'

const Error404 = () => {

    useEffect(() => {
        document.title = `Erreur 404`
    })

    return (
        <div className ="Erreur">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to ='/' end style = {{textDecoration:'underline'}}>
                <span>Retournez sur la page d'acceuil</span>
            </NavLink>
        </div>
    )
}

export default Error404