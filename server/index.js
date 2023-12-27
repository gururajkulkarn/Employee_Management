import  express  from "express";
import cors from 'cors'
import { adminRouter } from "./Routes/AdminRoutes.js";
 
const app = express()
app.use(cors({
    origin : ["http://localhost:3000"],
    methodes:['GET','POST','PUT'],
    credentials : true
}))
app.use(express.json())
app.use('/auth', adminRouter)
app.use(express.static('Public'))

app.listen(3001,() => {
    console.log("server is running")
})


