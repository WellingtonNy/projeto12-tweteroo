import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

const user =[];

const tweets=[];

app.use(cors());
app.use(express.json());


app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;
    const usuario = { username, avatar };
    user.push(usuario);
    res.send('OK');
});


app.post('/tweets', (req, res) => {
    
    if (user === []) {
        res.send('UNAUTHORIZED');
        return;
    }
    
    const { username, tweet } = req.body;
    const msg = { username, tweet };


    tweets.push(msg);
    res.send('OK');
});










app.listen(PORT, () => console.log(`Conectado a porta ${PORT}`));

