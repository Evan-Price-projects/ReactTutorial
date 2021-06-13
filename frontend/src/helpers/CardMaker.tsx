import { useState } from 'react'

import { Card, Button } from 'react-bootstrap'
import "../App.scss";
import React from 'react';

function CardMaker(props: {
    title: string; subTitle: string, id: number, content: string, group: number, setArticleInfo: React.Dispatch<React.SetStateAction<{
        content: string;
        id: number;
        title: string;
        subTitle: string;
        group: number;
    }[]>>
}) {

    const [title, setTitleInfo] = useState(props.title);
    const [changer, setChangeInfo] = useState(false);


    const addComment = async () => {
        await fetch(`/api/articles/${props.id}/update-title`,
            {
                method: 'post', body: JSON.stringify({ title }),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            )
            setChangeInfo(false);

        }

    const titleShow = () => {
        console.log(changer)
        if (changer) {
            return (
                <Card.Title>
                    <input type="text" value={title} onChange={(event) => setTitleInfo(event.target.value)} />
                    <Button onClick={() => addComment()}></Button>
                </Card.Title>
            )
        } else {
            return (
                <Card.Title onClick={() => setChangeInfo(true)}>
                    {title}
                </Card.Title>
            )
}
    }

return (
    <Card style={{ background: '#f2edd7', color: '#393232' }}>
        {titleShow()}
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