import Banners from "./banners/Banners"
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap"

const MainPage = ({peliculasMain, userInfo}) => {

    return (
        <div className="main-css d-flex justify-content-center">
            <Row xs={1} md={3} className="g-4 d-flex container">
            {peliculasMain.length > 0 ? peliculasMain.map((p, index)=> (
                <Col key={index}>
                <Banners p= {p} userInfo={userInfo}/>
                </Col>
            )): <h1>Cargando</h1> }
            </Row>
        </div>
    )
}

export default MainPage