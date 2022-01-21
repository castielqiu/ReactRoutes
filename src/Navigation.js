import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navitation() {
  return (
    <Nav className="my-5">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
