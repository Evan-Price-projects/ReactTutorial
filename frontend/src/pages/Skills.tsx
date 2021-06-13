import React from 'react'
import CardMaker from '../helpers/CardMaker';

class Skills extends React.Component {
    render() {
        return (
            <>
                <div className="card-padding">

                    <CardMaker
                        title="Programming Languages"
                        subTitle=""
                        content="
            TypeScript, Java, Python 2 and 3, Rust, C, R,  Julia, HTML, HTML.erb, HAML, CSS, SCSS
            "/>
                    <CardMaker
                        title="Frameworks"
                        subTitle=""
                        content="
            Angular, Actix, Rails, React
            "/>
                    <CardMaker
                        title="Databases"
                        subTitle=""
                        content="
            MongoDB, PostgreSQL, SQLite
            "/>
                    <CardMaker
                        title="Testing"
                        subTitle=""
                        content="
            Jest, Jasmine, Karma, Protractor, RSpec, Cucumber, Capybara, JUnit
            "/>
                </div>
            </>
        )
    }
}
export default Skills;
