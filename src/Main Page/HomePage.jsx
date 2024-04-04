import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="background-page d-flex flex-column justify-content-center align-items-center">
            <h1 className="nombre-Page">CineQuorum</h1>
            <p className="container">CineQuorum es un lugar donde encontraras informacion de cualquie pelicula, desde clasicas a actuales</p>
            <p className="container">Si no tenes una cuenta podes <Link to='/registro'>registrate</Link></p>
            <p className="container">Si ya la tienes inicia sesion</p>
        </div>
    )
}

export default HomePage