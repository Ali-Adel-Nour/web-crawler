const express = require('express')
const cookieParser= require('cookie-parser')

const app = express()
app.use(cookieParser())


const PORT = process.env.PORT || 3000


app.get('/',(req,res)=>{
  res.send('HEllO')
})


app.get('/set-cookie',(req,res)=>{
  //res.setHeader('set-cookie',"foo-bar") without module
  res.cookie('foo', 'bar',{
    //maxAge: 5000, //5s then will deleted automatically
  //expires: new Date('9 May 2023')
   //httpOnly:true
   //secure: true//https only
   domain:"example.com",
  })
  //res.cookie('fizz','buzz')
  res.send('Cookie are set')


})


app.get('/get-cookie',(req,res)=>{
  console.log(req.cookies)
  res.send(req.cookies)
})


app.get('/del-cookie',(req,res)=>{
  res.clearCookie('fizz','buzz')
res.send('cookie has been deleted')
})



app.listen(PORT,()=>{
console.log(`listening on ${PORT}`)})