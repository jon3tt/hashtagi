import { Routes, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocalization } from "./Components/useLocalization"; // Käytetään lokalisaatiota

import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import News from "./News/News";
import { Placeholder } from "./Components/Panels";
import { PageHeading } from "./Components/Heading";
import Spinner from "react-bootstrap/Spinner";
import { HouseDoorFill, PenFill, Newspaper } from "react-bootstrap-icons";
import React from "react";
import {useCookie} from "./Components/Cookie";



export default function App() {

    const [ language, setLanguage, deleteLanguage ] = useCookie("language", "/");
    const expiration = new Date();
    expiration.addHours(2).addMinutes(30);
    setLanguage("fi", expiration);

    const { strings } = useLocalization();

    // Odotetaan, että kielitiedosto on ladattu ennen kuin renderöidään sisältö
    if (!strings) {
        return (
            <Placeholder
                height="50px"
                content={<PageHeading color="text-white" text={<Spinner animation="grow" variant="primary"/>}/>}
            />
        );
    }

    return (
        <>
            {/* Container navigointipalkille */}
            <Container fluid className="p-0 m-0 fixed-bottom" as="main">
                <Navbar bg="dark" data-bs-theme="dark" expand="xs">
                    <Navbar.Brand as="span" className="navbar-brand mb-0 ps-3 h1">
                        {strings.appTitle || "XXX"}
                    </Navbar.Brand>
                    <Navbar.Toggle className="me-2" aria-controls="NavBar" />
                    <Navbar.Collapse id="NavBar">
                        <Nav className="mx-3 d-flex flex-row justify-content-around border-1-white-bottom">
                            <Nav.Link as={Link} to="/">
                                <HouseDoorFill className="me-3"/>
                                {strings.page_home_name || "XXX"}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/blog">
                                <PenFill className="me-3"/>
                                {strings.page_blog_name || "XXX"}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/news">
                                <Newspaper className="me-3"/>
                                {strings.page_news_name || "XXX"}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

            {/* Container reititettäville sivuille */}
            <Container fluid as="main" className="mb-5">
                <Routes>
                    <Route path="/"         element={<Home />} />
                    <Route path="/blog"     element={<Blog />} />
                    <Route path="/news"     element={<News />} />
                </Routes>
            </Container>
        </>
    );
}
