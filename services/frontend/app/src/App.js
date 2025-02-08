/* Järjestelmän komponentit, jotka mahdollistavat reitityksen eri sivujen välillä */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/* Sivujen komponentit, joita reititetään sovelluksessa */
import Home from "./Home/Home";
import Blog from "./Blog/Blog";

/* Bootstrap-komponentit navigointia ja ulkoasua varten */
import { Container, Nav, Navbar } from "react-bootstrap";

/* Sovelluksen pääkomponentti, joka sisältää reitityksen ja navigointipalkin */
export default function App() {
    return (
        // Router-komponentti hallinnoi sovelluksen reititystä
        <Router>
            {/* Container navigointipalkille, joka käyttää koko näytön leveyttä */}
            <Container fluid className="p-0 m-0" as="main">
                {/* Bootstrapin Navbar-komponentti pääsivuston navigointiin */}
                <Navbar expand="lg">
                    {/* Sivuston brändin nimi */}
                    <Navbar.Brand href="#">Hästägi</Navbar.Brand>

                    {/* Toggler-kuvake pienten näyttöjen navigointia varten */}
                    <Navbar.Toggle aria-controls="NavBar" />

                    {/* Navigointilinkit (Etusivu ja Blogi) */}
                    <Navbar.Collapse id="NavBar">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Etusivu</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blogi</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

            {/* Container, joka sisältää reititetyt sivut */}
            <Container as="main">
                <Routes>
                    {/* Etusivun reitti */}
                    <Route path="/" element={<Home />} />
                    {/* Blogi-sivun reitti */}
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </Container>
        </Router>
    );
}
