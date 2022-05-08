const express = require('express');
const cors = require('cors')
const app = express ()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('look kamfjwenfoj 34gt34 mama kfmlwmd vjbjdksjbvksjamacrack prack lama  I can code!!!')
});

const users = [
    {id:1, name: 'sabana', email:'sabana@gmail.com', phone: '018291392744'},
    {id:2, name: 'sarmin', email:'sarmin@gmail.com', phone: '018291346546'},
    {id:3, name: 'sohana', email:'sohana@gmail.com', phone: '0182912536543'},
    {id:4, name: 'sofia', email:'sofia@gmail.com', phone: '018291336643'},
    {id:5, name: 'sabnam', email:'sabnam@gmail.com', phone: '018291393465'},
]

app.get('/users',(req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
    res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user',(req,res) =>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.listen(port, () => {
console.log('listening to port', port)
})