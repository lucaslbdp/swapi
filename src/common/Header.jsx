import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaJediOrder, FaOldRepublic } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="header__icons">
        <FaJediOrder />
        <FaOldRepublic />
      </Container>
    </Navbar>
  );
}

export default Header;
