import express from 'express';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res)=> res.send(`Hey! ${req.body.name}`));

app.listen(8000, ()=> console.log('listening on port 8000'));
