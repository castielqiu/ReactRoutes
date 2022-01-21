import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navitation from "./Navigation";
export default function Home() {
  return (
    <Container>
      <Navitation />
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="users/sictweb">Seneca web Programming</Link>
        </li>
        <li>
          <Link to="users/Seneca-CDOT">
            Seneca center for Development of open Technology
          </Link>
        </li>
        <li>
          <Link to="users/zhiwei">zhiwei qiu</Link>
        </li>
      </ul>
    </Container>
  );
}
