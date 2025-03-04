import { Router } from "express";
import ClienteControler from "../controllers/cliente.controller.js";

const router = Router();

router.post("/", ClienteControler.registrarCliente);
router.get("/", ClienteControler.listarClientes);
router.get("/:id", ClienteControler.consultarCliente);
router.put("/:id", ClienteControler.atualizarCliente);
router.delete("/:id", ClienteControler.deletarCliente);

export default router;
