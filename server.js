const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');

const app = jsonServer.create()
const router = jsonServer.router('db.json')

const PORT = process.env.PORT || 3000;

// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router
app.use(auth)
app.use(router)
app.use(cors({origin: '*'}))
app.listen(PORT, () => {
    console.log('JSON Server is running');
})