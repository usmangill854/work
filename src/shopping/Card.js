import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";


const Card_Style=(props)=>{
    const {
        name, price,image
    } =props.prod;
    return<>
        <Card className="shadow-lg" style={{ width: '18rem' , marginTop:"5%" ,marginLeft:"2%"}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Price ={price}</Button>
            </Card.Body>
        </Card>
    </>
}
export default Card_Style;