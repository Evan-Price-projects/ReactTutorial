import React, { useState, useEffect } from 'react'
import { ModalBody } from 'react-bootstrap';
import CardMaker from '../helpers/CardMaker';

const HomePage = (props: { match: { params: { id: string } } }) => {

    let { params } = props.match;

    const [card, setArticleInfo] = useState([{content: '', id: 0, title: '', subTitle: '', group: 0 }]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${params.id}`)
            const body = await result.json();
            setArticleInfo(body)
        }
        fetchData()
    }, [params.id])
    console.log('card', card)
    if (card.length > 0) {
        let matcher =
            card.map((indCard, key) => (
                <CardMaker key={indCard.id}
                    title={indCard.title}
                    subTitle={indCard.subTitle}
                    content={indCard.content}
                />
            ))
        return (
            <div className="card-padding">
                {matcher}
            </div>
        )
    } else if (params.id === undefined) {
        return (
            <div className="card-padding">
                <CardMaker
                    title="Homepage"
                    subTitle="Welcome to my website"
                    content="This website was created to have fun with react"
                />
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }
}
export default HomePage;
