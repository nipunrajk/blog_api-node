const express = require('express')

const app = express()

// middlewares
// routes
// Error handlers middlewares
// Listen to server

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`server is running in port ${PORT}`))
