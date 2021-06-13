import { useState, useEffect } from 'react'
import CardMaker from '../helpers/CardMaker';

const HomePage = (props: { match: { params: { id: string } } }) => {

    let { params } = props.match;

    const [card, setArticleInfo] = useState([{ content: '', id: 0, title: '', subTitle: '', group: 0 }]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${params.id}`)
            const body = await result.json();
            setArticleInfo(body)
        }
        fetchData()
    }, [params.id])
    if (card && card.length > 0) {
        let matcher =
            card.map((indCard, key) => (
                <CardMaker key={indCard.id}
                    title={indCard.title}
                    subTitle={indCard.subTitle}
                    content={indCard.content}
                    group={indCard.group}
                    setArticleInfo={setArticleInfo}
                    id={indCard.id}

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
                    group={-11}
                    setArticleInfo={setArticleInfo}
                    id={-1}
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
