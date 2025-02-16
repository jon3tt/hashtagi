import { Row, Col } from "react-bootstrap";
function Placeholder ({height = "100%", content}){

    const style = {
        "height": `${height}`,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    };
    return (
        <Row className="bg-dark">
            <Col style={style}>{content}</Col>
        </Row>
    );
}

export {
  Placeholder
};