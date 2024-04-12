import 'dotenv/config';
import express from "express";
import cors from "cors";

import studentRoutes from "./routers/student.routes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

app.use("/api/students", studentRoutes)

/* LEVANTAR EL SERVIDOR */
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto: ", PORT);
});