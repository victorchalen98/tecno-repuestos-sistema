import request from "supertest";
import app from "../../src/app.js";

describe("Prueba de integración - Crear producto", () => {
  test("Debe crear un producto correctamente", async () => {
    const response = await request(app)
      .post("/api/productos")
      .send({ nombre: "Cable HDMI", stock: 50 });

    expect(response.statusCode).toBe(201);
    expect(response.body.mensaje).toBe("Producto creado correctamente");
  });

  test("Debe devolver error si faltan datos", async () => {
    const response = await request(app)
      .post("/api/productos")
      .send({ nombre: "" });

    expect(response.statusCode).toBe(400);
    expect(response.body.mensaje).toBe("Datos incompletos");
  });
});

