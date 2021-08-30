import {Col, Container, Row,Card} from "react-bootstrap";
  import image from "../images/login.jpg"
import {useEffect, useState} from "react";
// import Card from "./Card";
const Sign_In=()=> {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const init = ({uName, pass}) => {
        fetch("http://localhost:5000/api/sigin", {method: "POST",
            headers:{'content-type': 'application/json'}, body: JSON.stringify({uName, pass})}
        ).then(res => res.json()).then(res => setMessage(res.msg)).catch(err => console.error(err))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        init({username,password})
    }


    return <Container style={{marginTop: "5%"}}>
        <Row>
            {JSON.stringify(message)}
            <Col md={8}>
                <img src={image}/>
            </Col>
            <Col className="mt-md-4   " md={4}>
                <Card>
                    <Card.Body>
                        <form onSubmit={handleSubmit}>
                            <h3>Login</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="text" className="form-control" onChange={(e) => {
                                    setUsername(e.target.value)
                                }} placeholder="Enter email" required/>
                            </div>

                            <div className="form-group mt-2 ">
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={(e) => {
                                    setPassword(e.target.value)
                                }} placeholder="Enter password" required/>
                            </div>

                            <div className="form-group mt-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit"
                                    className="btn btn-primary btn-block btn-outline-success text-white mt-2">Submit
                            </button>
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