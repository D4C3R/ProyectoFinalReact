const express = require('express')
const cors = require('cors')
const multer = require('multer')

const app = express()
app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "./src/img")
    },
    filename: function (req, file, cb){
return  cb(null, `${Date.now()}_${file.originalname}` )
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('file'),(req, res) => {
    console.log(req.body)
    console.log(req.file)
})

app.listen(2077, ()=>{
    console.log("server is running")
})
