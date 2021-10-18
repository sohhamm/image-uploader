import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename.replace('src', 'images/'))
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static('images'))

app.post('/upload', (req, res) => {
  let image
  let uploadPath

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }

  image = req.files.image
  uploadPath = __dirname + image.name

  const url = `http://localhost:${PORT}`

  image.mv(uploadPath, err => {
    if (err) return res.status(500).send(err)

    res.json({
      data: `${url}/${image.name}`,
      message: 'success',
    })
  })
})

app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`),
)
