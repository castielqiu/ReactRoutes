import { Container, Card, Spinner } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import useSWR from "swr";
import Navitation from "./Navigation";

export default function User() {
  //Hook to get the username from the URL via the BrowserRouter
  //1.create {username}
  const { username } = useParams();

  //use SWR
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: user, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  if (error) {
    return <h1>Error..</h1>;
  }
  //if no user found then show loading animation
  if (!user) {
    return <Spinner animation="grow" />;
  }

  return (
    <Container>
      <Navitation />
      <Container>
        <Card style={{ width: "400px" }}>
          <Card.Body>
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Title>
              {user.name}(<a href={user.html_url}>@{user.login}</a>)
            </Card.Title>
            <Card.Text>{user.bio}</Card.Text>
            <Card.Link as={Link} to={`/users/${username}/repos`}>
              Repository
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}
