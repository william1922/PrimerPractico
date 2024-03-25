import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from '../Main Page/MainPage'
import HomePage from '../Main Page/HomePage'
import { useEffect, useState } from 'react'
import PeliculaInfo from '../pelicula info/PeliculaInfo'
import Header from '../header/Header'
import Registro from '../Registro/Registro'
import EditarPelicula from '../editar pelicula/EditarPelicula'

export const RouterPrincipal = () => {

    const getPeliById = async(id, setPeliculaInfo) =>{
        try {
            const pelicula = await fetch(`http://localhost:8000/peliculas/${id}`);
            const jsonPelicula = await pelicula.json()
            setPeliculaInfo(jsonPelicula)
        } catch (error) {
            console.log(error);
        }
    }

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo"))|| null);

    const [peliculasMain, setPeliculasMain] = useState([])

    const getPeliculas = async() => {
        try {
            const peliculas = await fetch('http://localhost:8000/peliculas')
            const jsonPeliculas = await peliculas.json()
            setPeliculasMain(jsonPeliculas)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        if(peliculasMain.length == 0)
        getPeliculas()
    },[peliculasMain])

    return (
        <>
        <BrowserRouter>
        <Header userInfo={userInfo} setUserInfo={setUserInfo}/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/catalogo' element={<MainPage peliculasMain={peliculasMain}/>}/>
            <Route path='/pelicula-info/:id' element={<PeliculaInfo getPeliById={getPeliById}/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/editar-pelicula/:id' element={<EditarPelicula getPeliById={getPeliById} getPeliculas={getPeliculas}/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}