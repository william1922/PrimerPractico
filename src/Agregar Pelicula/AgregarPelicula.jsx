import './agregarPelicula.css';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AgregarPelicula = ({peliculasMain, getPeliculas}) =>{

    const navigate = useNavigate()

    const handleAgregarPelicula = async(e) =>{
        e.preventDefault()

        let nombre = e.target.nombre.value;
        let genero = e.target.genero.value;
        let anio = e.target.anio.value;
        let resumen = e.target.resumen.value;
        let director = e.target.director.value;
        let imagen = e.target.imagen.value

        let productoAAgregar = {
            id: `${peliculasMain.length + 1}`,
            nombre: nombre,
            genero: genero,
            anio: anio,
            resumen: resumen,
            director: director,
            imagen: imagen
        }

        fetch(`http://localhost:8000/peliculas`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoAAgregar)
          })
          getPeliculas()
          navigate('/catalogo')
    }

    return (
        <div className='background-page-editar'>
            <Form onSubmit={handleAgregarPelicula} className='d-flex flex-column py-3 align-items-center'>
      <Form.Group className="mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupNombre">
        <Form.Label className='text-white'>Nombre</Form.Label>
        <Form.Control type="text" name="nombre"/>
      </Form.Group>
      <Form.Group className="mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupGenero">
        <Form.Label className='text-white'>Genero</Form.Label>
        <Form.Control type="text" name="genero"/>
      </Form.Group>
      <Form.Group className="mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupAnio">
        <Form.Label className='text-white'>Anio</Form.Label>
        <Form.Control type="text" name="anio"/>
      </Form.Group>
      <Form.Group className="mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupResumen">
        <Form.Label className='text-white'>Resumen</Form.Label>
        <Form.Control as="textarea" style={{ height: '100px' }} name="resumen"/>
      </Form.Group>
      <Form.Group className="mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupDirector">
        <Form.Label className='text-white'>Director</Form.Label>
        <Form.Control type="text" name="director"/>
      </Form.Group>
      <Form.Group className="mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupImagen">
        <Form.Label className='text-white'>Imagen</Form.Label>
        <Form.Control type="text" name="imagen"/>
      </Form.Group>
      <button className='btn boton-registro text-white btn-success' type='submit' onClick={()=>{handleAgregarPelicula(e)}}>
           Guardar
          </button>
    </Form>
        </div>
    )
}

export default AgregarPelicula