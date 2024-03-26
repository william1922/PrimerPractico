import { useEffect } from "react"
import { Outlet, useNavigate } from 'react-router-dom'

const RutaProtegida = ({auntenticado, children}) => {

    const navigate = useNavigate()

    if(auntenticado) {
        return children ? children : <Outlet/>
    }
 
    useEffect(()=>{
        navigate('/')
    }, [])
}

export default RutaProtegida