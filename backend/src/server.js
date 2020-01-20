import app from './app'

app.listen(process.env.PORT || 3000)

console.log(`Server started at ${process.env.PORT || 3000}`)

export default app
