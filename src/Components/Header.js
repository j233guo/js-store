import {useState} from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown} from 'react-bootstrap';
import {FaSearch, FaShoppingBag, FaShoppingCart} from 'react-icons/fa'

const Header = () => {

    const [searchBar, setSearchBar] = useState("All")
    const [searchCategory, setSearchCategory] = useState("All")

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/" className="brand"><FaShoppingBag/> J's Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="resposnive-navbar-nav">
                <Nav className="ml-auto" >
                    
                    <Form inline >
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                {searchCategory}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={() => {setSearchCategory("All")}}>All</Dropdown.Item>
                                <Dropdown.Item onSelect={() => {setSearchCategory("Home")}}>Home</Dropdown.Item>
                                <Dropdown.Item onSelect={() => {setSearchCategory("Electronics")}}>Electronics</Dropdown.Item>
                                <Dropdown.Item onSelect={() => {setSearchCategory("Computers")}}>Computers</Dropdown.Item>
                                <Dropdown.Item onSelect={() => {setSearchCategory("Clothing")}}>Clothing</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <FormControl type="text" placeholder={`Search ${searchCategory}...`}
                            className="mr-sm-2" style={{width: '400px'}}
                            onChange={(event) => {setSearchBar(event.target.value)}}/>
                        <a href={`/search/${searchCategory}/${searchBar}`}><Button variant="success" ><FaSearch/> Search</Button></a>
                    </Form>
                </Nav>
                <Nav className="ml-auto">
                    <NavDropdown title="Hello, Sign In" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/sign-in">Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="/sign-up">Create an Account</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home"><FaShoppingCart/> Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
