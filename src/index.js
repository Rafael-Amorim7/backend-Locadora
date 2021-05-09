import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/routes.js'


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(router)


app.listen(PORT, () => console.log(`Server running on port  ${PORT}`))

