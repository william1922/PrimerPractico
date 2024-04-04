import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

const EditarPelicula = ({ getPeliById, getPeliculas }) =>{
    const [peliculaAEditar, setPeliculaAEditar] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    const handleEditPelicula = async(e) =>{
        e.preventDefault()

        let nombre = e.target.nombre.value;
        let genero = e.target.genero.value;
        let anio = e.target.anio.value;
        let resumen = e.target.resumen.value;
        let director = e.target.director.value;
        let imagen = e.target.imagen.value

        let productoAEditar = {
            nombre: nombre,
            genero: genero,
            anio: anio,
            resumen: resumen,
            director: director,
            imagen: imagen
        }

        fetch(`http://localhost:8000/peliculas/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoAEditar)
          })
          getPeliculas()
          navigate('/catalogo')
    }

    useEffect(()=>{
        getPeliById(id, setPeliculaAEditar)
    },[])

    return (
        <div className='background-page-editar'>
            <Form onSubmit={handleEditPelicula} className='d-flex flex-column py-3 align-items-center'>
      <Form.Group className="mb-3 mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupNombre">
        <Form.Label className='text-white'>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" defaultValue={peliculaAEditar&& peliculaAEditar.nombre} />
      </Form.Group>
      <Form.Group className="mb-3 mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupGenero">
        <Form.Label className='text-white'>Genero</Form.Label>
        <Form.Control type="text" name="genero" defaultValue={peliculaAEditar&& peliculaAEditar.genero}/>
      </Form.Group>
      <Form.Group className="mb-3 mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupAnio">
        <Form.Label className='text-white'>Anio</Form.Label>
        <Form.Control type="text" name="anio" defaultValue={peliculaAEditar&& peliculaAEditar.anio}/>
      </Form.Group>
      <Form.Group className="mb-3 mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupResumen">
        <Form.Label className='text-white'>Resumen</Form.Label>
        <Form.Control as="textarea" style={{ height: '100px' }} name="resumen" defaultValue={peliculaAEditar&& peliculaAEditar.resumen}/>
      </Form.Group>
      <Form.Group className="mb-3 mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupDirector">
        <Form.Label className='text-white'>Director</Form.Label>
        <Form.Control type="text" name="director" defaultValue={peliculaAEditar&& peliculaAEditar.director}/>
      </Form.Group>
      <Form.Group className="mb-3 mb-3 col-10 col-sm-8 col-md-7 col-lg-5" controlId="formGroupImagen">
        <Form.Label className='text-white'>Imagen</Form.Label>
        <Form.Control type="text" name="imagen" defaultValue={peliculaAEditar&& peliculaAEditar.imagen}/>
      </Form.Group>
      <button className='btn boton-registro text-white btn-success' type='submit' onClick={()=>{handleEditPelicula}}>
           Guardar
          </button>
    </Form>
        </div>
    )
}

export default EditarPelicula