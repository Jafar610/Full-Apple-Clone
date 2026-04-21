const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database : 'apple_db'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('DB connected');
})

app.post('/register',(req, res)=>{
    const {username, email, password} = req.body;

    bcrypt.hash(password, 10, (err, hash)=>{
        if(err) throw err;
        connection.query('INSERT INTO users (username, email, password) VALUES (?,?,?) ', [username, email, hash], (err, results)=>{
            if(err) throw err;
            console.log(results);
            res.json({message: 'Data submitted successfully'})
        })
    })
});


app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    
    connection.query('SELECT * FROM users WHERE email = ? ', [email],async(err, results)=>{
        if(err) throw err;
    
        const hashedPassword = results[0].password;
        const match = await bcrypt.compare(password, hashedPassword);

        if(!match){
            res.json({message: 'Wrong Username or Password'});
        }else{
            res.json({message : 'User login successfully'});
        }

    })

})

app.get('/music', async(req, res)=>{
    const response = await axios.get("https://api.deezer.com/search?q=drake");
  res.json(response.data);
})

app.get('/',(req, res)=>{
    res.json({message: 'hello amazing people'})
})

app.listen(3002,(err)=>{
    if(err)throw err;
    console.log('Server is running on http://localhost:3002');
})