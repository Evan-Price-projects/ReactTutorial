import bodyParser from 'body-parser';
import express from 'express';

const articles = [
    {
        id:1,
        group: 0,
        title: "Deck of Cards",
        subTitle: "August 2020 - December 2020",
        content: " Worked in a simulated agile scrum environment with a team of five. Went through three iterations and used programming tools such as RSPEC, HTML.erb, CSS, Ruby, Rails, Github issues, Pivotal Tracker. The project entailed four weekly scrum meetings, SimpleCov, Sqlite as production and Postgres as development, Heroku Deployment, TDD, BDD, RESTful services."
    },
    {
        id:2,
        group: 1,
        title: "Programming Tools",
        subTitle: "",
        content: " Data Structures, Git, Diagrams, RESTful Services, Statistics, Numerical Optimization, Algorithm Optimization, Advanced Calculus"
    },
    {
        id:3,
        group: 2,
        title: "University of Iowa, Iowa City, IA — B.S. in Computer Science",
        subTitle: "Minor in Math",
        content: "Graduated December 2020"
    },
    {
        id:4,
        group: 3,
        title: "FLiPPOS, Billings, MT — Jr Software Developer",
        subTitle: "Feb 2021 - PRESENT",
        content: "Main code contributor to Angular 11 TypeScript code base in the company. Using the RXJS library and MongoDB. Implementing Jira Tickets tied to Zeplin Screens. Contribute to the Rust code base via creating data models and implementing small changes. Largest contribution was building a basic web socket. Able to debug and work with CI/CD with Kubernetes and Docker tools seamlessly. To date, have contributed over 17,000 usable lines of code to the Angular Code base."
    },
    {
        id:5,
        group: 4,
        title: "Programming Languages",
        subTitle: "",
        content: "TypeScript, Java, Python 2 and 3, Rust, C, R,  Julia, HTML, HTML.erb, HAML, CSS, SCSS"
    },
    {
        id:6,
        group: 4,
        title: "Frameworks",
        subTitle: "",
        content: "Angular, Actix, Rails, React"
    },
    {
        id:7,
        group: 4,
        title: "Databases",
        subTitle: "",
        content: "MongoDB, PostgreSQL, SQLite"
    },
    {
        id:8,
        group: 4,
        title: "Testing",
        subTitle: "",
        content: "Jest, Jasmine, Karma, Protractor, RSpec, Cucumber, Capybara, JUnit"
    },
    ];

const app = express();

app.use(express.json())

app.post('/api/articles/:id/look', (req, res) => {
    const art = req.params.id;
    let arty = articles.find(art1=>art1.id===Number(art))
    res.status(200).send(`${arty}`)
})

app.post('/api/articles/:id/add', (req, res) => {
    const art = req.params.id;
    let arty = articles.find(art1=>art1.id===Number(art))
    res.status(200).send(`${arty}`)
})

app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res)=> res.send(`Hey! ${req.body.name}`));

app.listen(8000, ()=> console.log('listening on port 8000'));



