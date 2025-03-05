import { Router } from "express";
import EspecieControler from "../controllers/especie.controller.js";

const router = Router();

router.post("/", EspecieControler.registrarEspecie);
router.get("/", EspecieControler.listarEspecies);
router.get("/:id", EspecieControler.consultarEspecie);
router.put("/:id", EspecieControler.atualizarEspecie);
router.delete("/:id", EspecieControler.deletarEspecie);

export default router;