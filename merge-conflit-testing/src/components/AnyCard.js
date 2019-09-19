import React from "react"
import {Card, CardBody, CardTitle, CardText, Col} from "reactstrap"

const AnyCard = (props) => {

    const { id, firstName, lastName } = props;

    return (
        <Col sm="6" style={{margin: "20px auto"}}>
            <Card body>
                <CardBody>
                    <CardTitle>{`${firstName} ${lastName}`}</CardTitle>
                    <CardText>{`Id: ${id}`}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default AnyCard;