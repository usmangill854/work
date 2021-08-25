import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


const Card_Style=(props)=>{
    const {

        id,name, price,image
    } =props.prod;
    return<>
        <Card   className="shadow-lg" style={{ width: '18rem' , marginTop:"5%" ,marginLeft:"2%"}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title><Link to={"/detailPage/"+id} >{name}</Link></Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Title  style={{color:"blue"}} >Price ={price}</Card.Title>
                <Link   to = {"/detailPage/" + id} > <Button variant="outline-dark"> Detail</Button>  </Link>
            </Card.Body>
        </Card>
    </>
}
export default Card_Style;