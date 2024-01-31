import * as path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import webhookRoutes from './routes/webhookRoutes';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/src/views/page.html'));
});

app.use('/', webhookRoutes);

app.listen(port, () => {
  console.log(`WhatsApp bot listening at http://localhost:${port}`);
});
