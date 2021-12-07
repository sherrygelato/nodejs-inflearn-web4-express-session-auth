var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session') // 모듈로서 사용하기

var app = express()

// 사용자의 요청이 있을 때마다 사용하기
app.use(session({
    // session함수 실행시키면 세션이 실행되고
    // 미들웨어가 내부적으로 개입해서 status 작업 실행함
    // 이하 옵션 핸들링
  secret: 'keyboard cat', // 필수요건 => 개인 정보니, 별도 파일에 
  resave: false,
  // default = false 세션 데이터 바뀌기 전까진 저장소에 저장 안함
  saveUninitialized: true
  // default = true 세션 필요전까지 세션 구동 안한다. 
  // false는 무조건 구동이기에, 서버에 큰 부담
}))

app.get('/', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
    res.send('Hello session!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}) 