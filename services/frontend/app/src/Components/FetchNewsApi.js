import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Col, Row, ListGroup, Container, Button } from "react-bootstrap";
import { getLocalization } from "./Localization"; // Hakee kielidatan
import { FetchLang } from "./FetchLang";
import { Placeholder } from "./Panels";
import { PageHeading } from "./Heading"; // Hakee kielitiedoston

export default class FetchNewsApi extends React.Component {
    constructor(props) {
        super(props);
        this.apikey = process.env.REACT_APP_NEWS_APIKEY;
        this.endpoint = "https://newsapi.org/v2/everything?q=keyword&apiKey=";
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            strings: null, // Alustetaan tyhjällä arvolla
        };
    }

    async componentDidMount() {
        const addr = this.endpoint + this.apikey;
        try {
            const res = await fetch(addr);
            const result = await res.json();
            this.setState({ isLoaded: true, items: result.articles });
        } catch (error) {
            this.setState({ isLoaded: true, error });
        }

        // Haetaan kielitiedosto ja päivitetään tila
        await FetchLang("fi");
        const strings = await getLocalization("fi");
        this.setState({ strings });
    }

    render() {
        const { error, isLoaded, items, strings } = this.state;

        if (!strings) {
            return (
                <Placeholder
                    height="50px"
                    content={<PageHeading color="text-white" text={<Spinner animation="grow" variant="primary"/>}/>}
                />
            );
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Spinner animation="grow" variant="primary"/>;
        } else {
            return (
                <ListGroup as="ul">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <ListGroup.Item as="li" active>{item.title}</ListGroup.Item>
                            <ListGroup.Item as="li">{item.description}</ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Button variant="outline-primary" href={item.url}>{strings.readMore}</Button>
                            </ListGroup.Item>
                        </React.Fragment>
                    ))}
                </ListGroup>
            );
        }
    }
}
