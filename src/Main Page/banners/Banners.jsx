import { useNavigate } from "react-router-dom";
import "../banners/banner.css";
import Card from "react-bootstrap/Card";

const Banners = ({ p, userInfo }) => {

  const navigate = useNavigate()

  return (
    <div className="">
      <Card className="imagen-card my-4 shadow-lg">
        {userInfo && userInfo.rol.includes("admin") &&
        <button
          className="editar-pelicula btn"
          onClick={() => {navigate(`/editar-pelicula/${p.id}`)}}
        >
          Editar
        </button>
        }
        <Card.Title className="titulo-pelicula fs-3 w-100 text-center">
          {p.nombre}
        </Card.Title>
        <div
        className="contenedor-card"
          onClick={() => {
            navigate(`/pelicula-info/${p.id}`);
          }}
        >
          <Card.Img
            variant="top"
            className="imagen-card rounded border border-white shadow border-opacity-25"
            src={p.imagen}
          />
          <Card.Body className="card-body rounded">
            <Card.Text className="genero-anio fs-5">
              {p.genero} - {p.anio}
            </Card.Text>
            <Card.Text className="texto-resumen">{p.resumen}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Banners;
