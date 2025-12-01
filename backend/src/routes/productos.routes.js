import express from "express";
import { crearProductoController } from "../controllers/productos.controller.js";

const router = express.Router();

router.post("/", crearProductoController);

export default router;

