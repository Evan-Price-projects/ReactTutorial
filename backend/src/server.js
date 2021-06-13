import bodyParser from 'body-parser';
import express from 'express';
import { MongoClient } from 'mongodb';


const app = express();

const withDB = async (operations) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db('my-site');
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
        const art = req.params.id;

        const article = await db.collection('articles').find({ group: Number(art) }).toArray()
        res.status(200).json(article);
    },res)
})

app.post('/api/articles/:id/update-title', async (req, res) => {
    const { title } = req.body;
    console.log('title',  title)
    withDB(async (db) => {
        const art = req.params.id;
        const article = await db.collection('articles').findOne({ group: Number(art) })
    
        await db.collection('articles').updateOne({
            id: Number(art)
        }, {
            '$set': {
                title: title
            }
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ group: Number(art) })
        res.status(200).json(updatedArticleInfo)
    },res)
})


app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send(`Hey! ${req.body.name}`));

app.listen(8000, () => console.log('listening on port 8000'));



