const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Look mama !hey mama kaj hoyese !Wow ki anando akashe batashe amer ki anando')
});

const users = [
    { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "0178888888" },
    { id: 2, name: "shabnur", email: "shabnur@gmail.com", phone: "0178888888" },
    { id: 3, name: "sushoriya", email: "sushoriya@gmail.com", phone: "0178888888" },
    { id: 4, name: "suchanda", email: "suchanda@gmail.com", phone: "0178888888" },
    { id: 5, name: "srabonti", email: "srabonti@gmail.com", phone: "0178888888" },
    { id: 6, name: "sabila", email: "sabila@gmail.com", phone: "0178888888" },
    { id: 7, name: "sohana", email: "sohana@gmail.com", phone: "0178888888" },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
        console.log()
    }
    else {
        res.send(users);
    }

})



app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
})

// post server side start
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour, sour fazle ')
})
//post server side end

app.listen(port, () => {
    console.log("listening to port", port);
})