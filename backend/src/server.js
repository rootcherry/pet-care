import express from "express";
import cors from "cors";
import clienteRoutes from "./routes/cliente.routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// routes
app.use("/clientes", clienteRoutes);

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
