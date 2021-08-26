import {Col, Container, Row,Card} from "react-bootstrap";
  import image from "../images/login.jpg"
// import Card from "./Card";
const Sign_In=()=>{
    return<Container style= {{ marginTop:"5%"}}>
            <Row  >
                <Col md={8}>
                    <img src={image}  />
                </Col>
                <Col className="mt-md-auto   " md={4}>
                <Card   >
                    <Card.Body >
                    <form >
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" required />
                        </div>

                        <div className="form-group mt-2 ">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" required />
                        </div>

                        <div className="form-group mt-2">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block btn-outline-success text-white mt-2">Submit</button>
                        <p className="forgot-password  mt-3">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                    </Card.Body>
                </Card>



                </Col>
            </Row>

    </Container>
}
export default Sign_In