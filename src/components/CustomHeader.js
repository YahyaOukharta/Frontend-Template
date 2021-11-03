import { Navbar,Nav,NavDropdown, Container} from 'react-bootstrap'

const CustomHeader = ({ head, description }) => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/#features">Features</Nav.Link>
                        <Nav.Link href="/#pricing">Pricing</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>

                    </Nav>
                    <NavDropdown title="Get Started" id="navbarScrollingDropdown" className="btn outline-success">
                            <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Register</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default CustomHeader
