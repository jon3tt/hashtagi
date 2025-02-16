/* Blog.js */
import React from 'react';
import {Row, Col, Container} from "react-bootstrap";

import { PageHeading } from "../Components/Heading";
import { Placeholder } from "../Components/Panels";
import { UpdatePageTitle } from "../Components/UpdatePageTitle";
import { useLocalization } from "../Components/useLocalization";

function Blog() {
    const { strings } = useLocalization();
    if (!strings) {
        return (
            <Placeholder
                height="250px"
                content={<PageHeading color="text-white" text="Ladataan sisältöä..."/>}
            />
        );
    }
    UpdatePageTitle(strings.page_blog_name);

    return (
        <>
            <Placeholder
                height="250px"
                content={<PageHeading color="text-white" text={strings.page_blog_name}/> }
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