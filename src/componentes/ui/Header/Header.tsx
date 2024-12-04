import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../hooks/redux"
import { setLogOut } from "../../../redux/slices/auth";

export const Header = ()=>{
const dispatch = useAppDispatch();
  const handleLogout = ()=>{
    dispatch(setLogOut());
  }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >
            <Link to={"/"} className="nav-link">Inicio</Link>
          </Navbar.Brand>
          
          <Nav className="me-auto">

          <Nav.Item >
            <Link to={"/search"} className="nav-link">Buscar heroe</Link>
          </Nav.Item>

          <Nav.Item >
            <Link to={"/dcHeroes"} className="nav-link">Dc Heroes</Link>
          </Nav.Item>

          <Nav.Item >
            <Link to={"/marvelHeroes"} className="nav-link">Marvel heroes</Link>
          </Nav.Item>
          </Nav>
          <Navbar.Collapse className="justify-content-end gap-2">
            <Navbar.Text>ingrasó como: admin</Navbar.Text>
            <Nav.Item>
            <div onClick={handleLogout} className="d-flex justify-content-center align-items-center">
            <span style={{cursor:'pointer', color:"white"}} className="material-symbols-outlined">
            logout
            </span>
            </div>
            </Nav.Item>
          </Navbar.Collapse>
            
        </Container>
      </Navbar>
    )
}