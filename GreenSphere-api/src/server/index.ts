import express from "express";
import createPlant from "./routes/createPlant"
import getPlants from "./routes/getPlants"
import deletePlant from "./routes/deletePlant"

const app = express()


app.use(express.json())

app.use("/", getPlants)
app.use("/register", createPlant)
app.use("/", deletePlant)

app.listen(3000)