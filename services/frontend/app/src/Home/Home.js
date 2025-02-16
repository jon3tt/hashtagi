import React from 'react';
import { Container, Row, Col, } from "react-bootstrap";

import { Placeholder } from "../Components/Panels";
import { PageHeading } from "../Components/Heading";

import { UpdatePageTitle } from "../Components/UpdatePageTitle";
import { useLocalization } from "../Components/useLocalization";

function Home() {
    const { strings } = useLocalization();

    if (!strings) {
        return (
            <Placeholder
                height="250px"
                content={<PageHeading color="text-white" text="Ladataan sisältöä..."/>}
            />
        );
    }

    UpdatePageTitle(strings.page_home_name);

    return (
        <>
            <Placeholder
                height={"250px"}
                content={<PageHeading color="text-white" text={strings.page_home_name}/>}/>
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
