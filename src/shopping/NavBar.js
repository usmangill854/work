import {Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Button} from "bootstrap";
import * as PropTypes from "prop-types";

function NewButton(props) {
    return null;
}

NewButton.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node
};
const NavBar=()=>{
    return<>
        <Navbar bg="dark" variant="dark">
            <Container>
                 <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="ml-auto ">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="/signIn">Sign In</Nav.Link>
                    <Nav.Link href="/detailPage">Detail Page</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
}
export default NavBar;