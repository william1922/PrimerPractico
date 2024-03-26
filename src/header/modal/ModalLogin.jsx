import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalLogin.css'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const ModalLogin = ({setUserInfo}) =>{
    const [show, setShow] = useState(false);

    const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async (e) =>{
    e.preventDefault();

    let usuarioEmail = e.target.email.value;
    let usuarioPassword = e.target.password.value
    let usuariosArray;

    const usuarios = await fetch('http://localhost:8000/usuarios')
    usuariosArray = await usuarios.json()

    const usuarioMatch = usuariosArray.find((u)=>{
        return u.email.toLowerCase() === usuarioEmail.toLowerCase()
    })

    if(!usuarioMatch) {
        return console.log("usuario no existe");
    }

    if (usuarioMatch.password !== usuarioPassword) {
        return console.log("usuario no password");
    }
    setUserInfo(usuarioMatch)
    localStorage.setItem("userInfo", JSON.stringify(usuarioMatch))
    navigate('/')
  }

  return (
    <>
      <button className='boton-Login btn' onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password'/>
      </Form.Group>
      <Button variant="primary" type='submit' onClick={handleClose}>
           Entrar
          </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {handleLogin(e) ,handleClose()}}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalLogin