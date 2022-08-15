import express from 'express';
import "dotenv/config";
import  bodyParser from 'body-parser';

import mongoose from 'mongoose';
import config from '@babel/core/lib/config';
const app = express();
app.use(bodyParser.json());


//database configuration
const database =process.env.DATABASE;
mongoose.connect("mongodb://Vanessa:vanessa@ac-c2y0spk-shard-00-00.a6ypokk.mongodb.net:27017,ac-c2y0spk-shard-00-01.a6ypokk.mongodb.net:27017,ac-c2y0spk-shard-00-02.a6ypokk.mongodb.net:27017/?ssl=true&replicaSet=atlas-xqr6vb-shard-0&authSource=admin&retryWrites=true&w=majority",
    {useNewUrlParser:true,
    useUnifiedTopology:true,

})
.then(()=>{
    console.log("database is well connected");
})

const port = process.env.PORT || 4040;
app.listen(port,()=>{
    console.log(`server is running on port  ${port}`);

});

export default app
