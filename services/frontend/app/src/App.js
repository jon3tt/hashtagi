import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Blog from "./Blog/Blog";

import Container from "react-bootstrap/Container";

export default function MyApp() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link element={Home} to={{pathname: "/"}}>Etusivu</Link>
                    </li>
                    <li>
                        <Link element={Blog} to={{pathname: "/blog"}}>Blogi</Link>
                    </li>
                </ul>
            </nav>
            <Container as="main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </Container>
        </Router>
    );
}
