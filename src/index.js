import express from 'express'
import bodyParser from 'body-parser'
import usersRouter from './routes/users.js'


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', usersRouter)


app.listen(PORT, () => console.log(`Server running on port  ${PORT}`))

