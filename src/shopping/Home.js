import Slider from "./Slider";
import Card_Style from "./Card";
import MappingCard from "./MappingCard";
import {Col, Container, Row} from "react-bootstrap";


const Home=()=>{
    return< Container>
<Row>
<Col>
    <Slider/>
    </Col>
</Row>
        <Row>
    <Col>
        <MappingCard/>
    </Col>
</Row>


{/*<img src={require('/img/logo192.png')} />*/}

        {/*<Card_Style/>*/}

    </Container>
}
export default Home