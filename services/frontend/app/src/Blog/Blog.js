import React from 'react';
import { Row, Col } from "react-bootstrap";

import { PageHeading } from "../Components/Heading";
import { Placeholder } from "../Components/Panels";

function Blog() {
    return (
        <>
            <title>#Blogi</title>
            <Placeholder
                height="250px"
                content={<PageHeading color="text-white" text="Blogi"/> }
            />
            <Row>
                <Col>
                    Tämä on blogi sivu :D
                </Col>
            </Row>
        </>
    );
}

export default Blog;