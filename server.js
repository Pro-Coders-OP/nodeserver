const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const Faceemo = require('./controllers/Faceemo');
// const profile = require('./controllers/profile');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'prasad',
    database : 'smartbrain'
  }
  });

const app = express();
app.use(bodyParser.json());
app.use(cors());


// app.get('/', (req,res) => {
//   res.send('It is Working');
// })

app.post('/signin', (req,res) => { signin.handlesignin(req, res, db, bcrypt) })

app.post('/register', (req,res) => { register.handleregister(req, res, db, bcrypt) })

app.post('/Faceemo', (req,res) => { Faceemo.handleFaceemo(req, res, db, bcrypt) })

// const database = {
//     users : [
//         {
//             id: '123',
//             name:'John',
//             email: 'john@gmail.com',
//             password: 'cookies',
//             joined: new Date()
//         },
//         {
//             id: '124',
//             name:'Sally',
//             email: 'sally@gmail.com',
//             password: 'grapes',
//             joined: new Date()
//         }
//     ]
// }

// app.get('/', (req, res) => {
//     res.send(database.users)
// })

// app.post('/signin', (req, res)=> {
//     if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
//         res.json(database.users[0]);
//     }
//     else{
//         res.status(400).json('error logging in');
//     }
    
// })

// app.post('/register', (req, res)=> {
//     const {email, name, password} = req.body;
//     database.users.push({
//         id:'125',
//         name:name,
//         email: email,
//         password:password,
//         joined:new Date()

//     })
//     res.json(database.users[database.users.length-1])
    
// })

app.listen(3001, ()=> {
    console.log('app is running on port 3001');
})


/*

/ --> res = this is working
/signin --> POST sucess/fail
/register --> POST = user
/profile/:userId ---> GET = user
/facerecognition
*/

// client: 'mysql',
//     connection: {
//       host : 'bkt9lmohcgga1kvkmz13-mysql.services.clever-cloud.com',
//       user : 'ujlxlyknwrzpheot',
//       password : 'VSKV7OXxQRSni5QMpnYb',
//       database : 'bkt9lmohcgga1kvkmz13'