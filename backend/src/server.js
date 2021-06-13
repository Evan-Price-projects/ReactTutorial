import bodyParser from 'body-parser';
import express from 'express';
import { MongoClient } from 'mongodb';


const app = express();

const withDB = async (operations) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db('my-site');
        console.log('a')
        await operations(db);

        client.close();
    }
    catch (err) {
        res.status(500).json({ message: "error connecting to db", err });
    }
}

app.use(express.json())

app.get('/api/articles/:id', async (req, res) => {
    withDB(async (db) => {
        console.log('asdfk\n\n\n\n\n\n')
        const art = req.params.id;

        const article = await db.collection('articles').findOne({ id: Number(art) })

        res.status(200).json(article);
    },res)
})

app.post('/api/articles/:id/update-title', async (req, res) => {
    const { title } = req.body;
    console.log('title',  title)
    withDB(async (db) => {
        const art = req.params.id;
        const article = await db.collection('articles').findOne({ id: Number(art) })
    
        await db.collection('articles').updateOne({
            id: Number(art)
        }, {
            '$set': {
                title: title
            }
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ id: Number(art) })
        res.status(200).json(updatedArticleInfo)
    },res)
})

/* app.post('/api/articles/:id/add', (req, res) => {
    const art = req.params.id;
    let arty = articles.find(art1 => art1.id === Number(art))
    res.status(200).send(`${arty}`)
}) */

app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send(`Hey! ${req.body.name}`));

app.listen(8000, () => console.log('listening on port 8000'));



