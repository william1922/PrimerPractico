import Form from 'react-bootstrap/Form';
import './Registro.css'
import { useNavigate } from 'react-router-dom';

const Registro = () => {

    const navigate = useNavigate()

    const handleRegistro = async (e) => {
        e.preventDefault();

        let nombre= e.target.nombre.value;
        let apellido = e.target.apellido.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let confirmarPassword = e.target.confirmarPassword.value;

        let usuariosArray;

        if(password !== confirmarPassword) {
            return console.log("las contrasenias no coinciden");
        }

    const usuarios = await fetch('http://localhost:8000/usuarios')
    usuariosArray = await usuarios.json()

    let usuarioMatch = usuariosArray.find((u) => {
        return u.email.toLowerCase() === email.toLowerCase()
    })

    if(usuarioMatch){
        return console.log("usuario existente");
    }

    let nuevoUsuario = {
        id: `${usuariosArray.length + 1}`,
        nombre : nombre,
        apellido : apellido,
        email: email,
        password: password,
        rol:["user"]
    }

    fetch('http://localhost:8000/usuarios', {
        method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nuevoUsuario)

    })
    navigate('/')
    }

    return (
        <div className='background-page'>
        <Form onSubmit={handleRegistro} className='d-flex flex-column py-3 align-items-center'>
      <Form.Group className="mb-3 col-10 col-sm-7 col-lg-5" controlId="formGroupNombre">
        <Form.Label className='text-white'>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" />
      </Form.Group>
      <Form.Group className="mb-3 col-10 col-sm-7 col-lg-5" controlId="formGroupApellido">
        <Form.Label className='text-white'>Apellido</Form.Label>
        <Form.Control type="text" name="apellido" />
      </Form.Group>
      <Form.Group className="mb-3 col-10 col-sm-7 col-lg-5" controlId="formGroupEmail">
        <Form.Label className='text-white'>Email</Form.Label>
        <Form.Control type="email" placeholder="fede@gmail.com" name="email" />
      </Form.Group>
      <Form.Group className="mb-3 col-10 col-sm-7 col-lg-5" controlId="formGroupPassword">
        <Form.Label className='text-white'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Form.Group className="mb-3 col-10 col-sm-7 col-lg-5" controlId="formGroupConfirmarPassword">
        <Form.Label className='text-white'>Confirmar Password</Form.Label>
        <Form.Control type="password" placeholder="Confirmar Password" name="confirmarPassword"/>
      </Form.Group>
      <button className='btn boton-registro text-white' type='submit' onClick={()=>{handleRegistro}}>
           Registrarse
          </button>
    </Form>
    </div>
    )
}

export default Registro