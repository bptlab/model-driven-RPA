import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Routes from './api/routes/routes.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerui from 'swagger-ui-express'


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use("", Routes);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MdRPA",
      description: "MdRPA(model driven RPA) is a tool that allows to design a UI model of applications and run RPA bots, which can use these UI models.",
      version: "1.0.0"
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ]
  },
  apis: ['./api/controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerui.serve, swaggerui.setup(swaggerSpec));


app.listen(8000, () => {
  console.log('Server started on port 8000');
});




