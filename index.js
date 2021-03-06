const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require("./config/key");

// 바디펄서가 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해준다.
// application/ x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,  { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  // useCreateIndex: true, 
  // useFindAndModify: false 
}).then(() => console.log('Successfully connected to mongodb!'))
  .catch(e => console.error(e));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/register', (req, res) => {

  //회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body)

  

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

