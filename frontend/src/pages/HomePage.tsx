import React from 'react'
import CardMaker from '../helpers/CardMaker';
import articles from '../img/articles';

const HomePage = (props: { match: { params: { id: string } } }) => {
    let { params } = props.match;
    const card = articles.filter(ar => ar.group === Number(params.id));
    if (card.length>0) {
        let matcher =                
        card.map((indCard, key)=>(
            <CardMaker key={indCard.group}
            title={indCard.title}
            subTitle={indCard.subTitle}
            content={indCard.content}
        />
        )  )
        return (
            <div className="card-padding">
                {matcher}
            </div>
        )
    } else if( params.id === undefined) {
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
    else{
        return(
            <></>
        )
    }
}
export default HomePage;
