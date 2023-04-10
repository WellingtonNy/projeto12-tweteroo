import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 5000;


const user = [];

let trava= true;

let avatari = '';

const tweets = [];



app.use(cors());
app.use(express.json());



app.post('/sign-up', (req, res) => {
    
    const { username, avatar } = req.body;

    if(!username || !avatar){
     return res.sendStatus(422);
    }

    const usuario = { username, avatar };
    
    user.push(usuario);
    
    trava = false;
    
    avatari = avatar;
    
    res.sendStatus(200);

});



app.post('/tweets', (req, res) => {
    
    if (trava) {

        return res.sendStatus(401);
    }
    
    const { username, tweet } = req.body;

    if(!username || !tweet){
        return res.sendStatus(422);
    }

    const msg = { username, tweet, avatar:avatari };
    
    tweets.reverse();
    
    tweets.push(msg);

    res.sendStatus(200);
    
});



app.get('/tweets', (req, res) => {
res.send(tweets.reverse().slice(0,10));
});



app.listen(PORT, () => console.log(`Conectado a porta ${PORT}`));