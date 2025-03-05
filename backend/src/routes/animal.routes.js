import { Router } from "express";
import AnimalController from "../controllers/animal.controller.js";

const router = Router();

router.post("/", AnimalController.registrarAnimal);
router.get("/", AnimalController.listarAnimais);
router.get("/:id", AnimalController.consultarAnimal);
router.put("/:id", AnimalController.atualizarAnimal);
router.delete("/:id", AnimalController.deletarAnimal);

export default router;
