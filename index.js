const express = require('express')
const app =express()
const cors = require('cors')
const port = 4000

app.use(cors())

app.get('/', (req, res)=>{
    return res.status(200).json({ 
        email: "gbemilekekenny@gmail.com",
        current_datetime: new Date(),
        github_url: "https://github.com/Jhaemis-hack/HNG12-stage0"
    })
})

app.listen(port, err =>{
    if(err) console.log({msg: 'Error listen to app @ port '+ port +'.', error: err})
    console.log(`app listening at http://localhost:${port}`)
})