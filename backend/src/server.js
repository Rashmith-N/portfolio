import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pool from './config/db.js'
import projectsRouter from './routes/projects.routes.js'

const app = express()

app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/projects', projectsRouter)

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

const PORT = process.env.PORT || 5000

pool
  .query('SELECT 1')
  .then(() => console.log('Database connected'))
  .catch((err) => {
    console.error('Database connection failed:', err.message)
    process.exit(1)
  })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
