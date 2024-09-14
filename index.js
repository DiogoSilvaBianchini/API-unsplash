import "dotenv/config"
import express from 'express'
import morgan from 'morgan'
import router from './src/routes/index.js'

const app = express()
const PORT = process.env.PORT

app.use(morgan("dev"))
app.use(router)

app.listen(PORT, () => console.log("http://localhost:" + PORT))

