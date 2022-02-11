const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Park:wjdghqkr03!@cluster0.jvxiu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  // useCreateIndex: true, 
  // useFindAndModify: false 
}).then(() => console.log('Successfully connected to mongodb!'))
  .catch(e => console.error(e));

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

