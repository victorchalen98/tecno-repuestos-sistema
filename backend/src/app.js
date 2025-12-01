// backend/src/app.js
import express from "express";
import productosRoutes from "./routes/productos.routes.js";

const app = express();
app.use(express.json());
app.use("/api/productos", productosRoutes);

export default app;

