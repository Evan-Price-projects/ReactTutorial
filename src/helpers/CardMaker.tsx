import { Card } from 'react-bootstrap'
import "../App.scss";

function CardMaker(props: { title: string; subTitle: string, content: string }) {
    return (
        <Card style={{ background: '#f2edd7', color: '#393232' }}>
            <Card.Title>
                {props.title}
            </Card.Title>
            <Card.Subtitle>
                {props.subTitle}
            </Card.Subtitle>
            <p>
                {props.content}
            </p>
        </Card>
    )
}
export default CardMaker;