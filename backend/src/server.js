import express from "express";
import cors from "cors";
import clienteRoutes from "./routes/cliente.routes.js";
import animalRoutes from "./routes/animal.routes.js";
import especieRoutes from "./routes/especie.routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// routes
app.use("/clientes", clienteRoutes);
app.use("/animais", animalRoutes);
app.use("/especies", especieRoutes);

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
