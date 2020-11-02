import express from 'express';
import { config as dotenv } from 'dotenv'


const app = express();
dotenv();
const port = process.env.API_PORT;

app.listen(port, () => {
  console.log(`Server on port ${port}`);
})