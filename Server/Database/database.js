import mongoose from 'mongoose';
const url = "mongodb://localhost:27017/graphQL";

mongoose.connect(url ,{ useNewUrlParser: true })


const db =mongoose.connection;
db.once('open', ()=> {
    console.log('Database connected:', url)
  })
  
  db.on('error', err => {
    console.error('connection error:', err)
  })
export {db};