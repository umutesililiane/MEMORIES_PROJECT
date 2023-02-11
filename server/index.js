import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
 
import postRoutes from './routes/posts.js';
const app = express ();

app.use(cors());

app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use('/posts',postRoutes);
// app.use('posts',postRoutes);

const CONNECTION_URL ='mongodb+srv://mydatabase:mydatabase123@cluster0.qvxqe3n.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect (CONNECTION_URL,{useNewUrlparser: true,useUnifiedTopology:true})
 .then(() =>app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
 .catch((error)=> console.log(error.message));
 
//  mongoose.set('useFindAndModify',false);