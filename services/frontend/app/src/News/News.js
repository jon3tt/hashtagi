/* News.js */
import React from 'react';
import {UpdatePageTitle} from "../Components/UpdatePageTitle";
import { useLocalization } from "../Components/Localization";
import {Placeholder} from "../Components/Panels";
import {PageHeading} from "../Components/Heading";
import FetchNewsApi from "../Components/FetchNewsApi";
import {Col, Container, Row} from "react-bootstrap";

function News (){
    const strings = useLocalization("fi");
    if (!strings) {
        return (
            <Placeholder
                height="250px"
                content={<PageHeading color="text-white" text="Ladataan sisältöä..."/>}
            />
        );
    }

    UpdatePageTitle(strings.page_news_name);

    return (
        <>
            <Placeholder
                height={"250px"}
                content={<PageHeading color="text-white" text={strings.page_news_name}/>}
            />
            <Container fluid>
                <Row xs={1}>
                    <Col>
                        <FetchNewsApi/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default News;