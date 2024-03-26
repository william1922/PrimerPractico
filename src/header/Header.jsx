import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import { useNavigate } from 'react-router-dom';
import ModalLogin from './modal/ModalLogin';

const Header = ({userInfo, setUserInfo}) => {
    const navigate = useNavigate()
    console.log(userInfo);

    const cerrarSesion = () => {
        localStorage.clear();
        setUserInfo(null)
        navigate('/')
    }

    
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand onClick={() => {navigate('/')}} className='text-white text-navbar'>Navbar</Navbar.Brand>
        { userInfo === null ?
        <div className='col-4 d-flex justify-content-evenly'>
            <button className='boton-a-registro btn' onClick={()=>{navigate('/catalogo')}}>Catalogo</button>
            <ModalLogin setUserInfo={setUserInfo}/>
            <button className='boton-a-registro btn' onClick={()=>{navigate('/registro')}}>Registrarse</button>
        </div>:
        <div className='col-4 d-flex justify-content-evenly'>
           { userInfo.rol.includes('admin') && <button className='boton-a-registro btn' onClick={()=>{navigate('/agregar-pelicula')}}>Agregar Pelicula</button>}
            <button className='boton-a-registro btn' onClick={()=>{navigate('/catalogo')}}>Catalogo</button>
            <button className='boton-a-registro btn' onClick={cerrarSesion}>Salir</button>
        </div>
    }
      </Container>
    </Navbar>
  );
}

export default Header;