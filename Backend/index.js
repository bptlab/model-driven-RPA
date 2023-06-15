
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Routes from './api/routes/routes.js'



const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


app.use("/Robot",Routes)


app.listen(8000, () => {
  console.log('Server started on port 8000');
});




