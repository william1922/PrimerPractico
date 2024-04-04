import Container from 'react-bootstrap/Container';
import './header.css'
import { useNavigate } from 'react-router-dom';
import ModalLogin from './modal/ModalLogin';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
      <Container className='d-flex'>
        <Navbar.Brand onClick={() => {navigate('/')}} className='text-white text-navbar'>CineQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0 flex-lg-column d-flex justif-content-between col-12"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        { userInfo === null ?
        <div className=' d-flex flex-column align-items-start align-items-md-none flex-lg-row justify-content-lg-end'>
            <button className='boton-a-registro btn col-xs-4 mx-2' onClick={()=>{navigate('/catalogo')}}>Catalogo</button>
            <ModalLogin setUserInfo={setUserInfo}/>
            <button className='boton-a-registro btn col-xs-4 mx-2' onClick={()=>{navigate('/registro')}}>Registrarse</button>
        </div>:
        <div className='d-flex flex-column align-items-start align-items-md-none flex-lg-row justify-content-lg-end'>
           { userInfo.rol.includes('admin') && <button className='boton-a-registro btn col-xs-4 mx-2' onClick={()=>{navigate('/agregar-pelicula')}}>Agregar Pelicula</button>}
            <button className='boton-a-registro btn btn col-xs-4 mx-2 my-1 my-lg-0' onClick={()=>{navigate('/catalogo')}}>Catalogo</button>
            <button className='boton-a-registro btn btn col-xs-4 mx-2' onClick={cerrarSesion}>Salir</button>
        </div>
    }
    </Nav>
    </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;