const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //공백을 없애주는 역할
        unique:1 //똑같은 이메일 사용하지 못하게

    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {   
        type: Number,
        default: 0
    },
    image: String,
    token: { //유효성 관리
        type: String
    },
    tokenExp: { //token 유효기간
        type: Number
    }

})

const User = mongoose.model('User', UserSchema)  // 모델로 스키마를 감싸준다

module.exports = {User} // 다른 곳에서도 쓸 수 있게 해준다