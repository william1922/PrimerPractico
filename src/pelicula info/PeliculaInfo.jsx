import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './peliculaInfo.css'

const PeliculaInfo = ({getPeliById}) => {
    const [peliculaInfo, setPeliculaInfo] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        getPeliById(id, setPeliculaInfo)
    },[])

    return (
        <div className="background-page py-3">
            <div className="container d-flex flex-row justify-content-center">
                <div className="col-5 imagen-info">
                    {peliculaInfo? <img className="imagen-info rounded" src={`${peliculaInfo.imagen}`}/> : <h4 className="imagen-info">Cargando</h4>}
                </div>
                <div className="col-7 d-flex flex-column align-items-center my-1">
                    {peliculaInfo? <h2 className="text-white">{peliculaInfo.nombre}</h2>: <h4>cargando</h4>}
                    {peliculaInfo? <h4 className="text-white">{peliculaInfo.director}</h4>: <h4>cargando</h4>}
                    {peliculaInfo? <h4 className="text-white">{peliculaInfo.anio} - {peliculaInfo.genero}</h4>: <h4>cargando</h4>}
                    {peliculaInfo? <p className="col-10 resumen-info">{peliculaInfo.resumen}</p>:<h4>cargando</h4>}
                </div>
            </div>
        </div>
    )
}

export default PeliculaInfo