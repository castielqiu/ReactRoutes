import { Container, Table, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navitation from "./Navigation";
import useSWR from "swr";

export default function Repos() {
  //Hook to get the username from the URL via the BrowserRouter
  //1.create {username}
  const { username } = useParams();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: repos, error } = useSWR(
    `https://api.github.com/users/${username}/repos?per_page=50`,
    fetcher
  );

  if (!repos) {
    return <Spinner animation="grow" />;
  }
  //if no user found return nothing
  if (error) {
    return <h1>Error..</h1>;
  }

  return (
    <Container>
      <Navitation />
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => (
              <tr key={repo.id}>
                <td>
                  <a href={repo.html_url}>{repo.name}</a>
                </td>
                <td>{repo.description}</td>
                <td>{repo.language}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
