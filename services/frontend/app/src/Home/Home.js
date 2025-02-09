import React from 'react';
import { Image, Container, Row, Col, } from "react-bootstrap";

import { Placeholder } from "../Components/Panels";
import { PageHeading } from "../Components/Heading";

function Home() {
    return (
        <>
            <title>#Etusivu</title>
            <Placeholder
                height={"250px"}
                content={<PageHeading color="text-white" text="Etusivu"/>}
            />
            <Container fluid>
                <Row xs={1}>
                    <Col>
                        <p>Tämä on Etusivu :D</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;