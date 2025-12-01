import { calcularStockDisponible, calcularTotalCompra } from "../src/services/utils.js";

test("calcular stock disponible correctamente", () => {
  expect(calcularStockDisponible(100, 20)).toBe(80);
});

test("calcular total de compra", () => {
  expect(calcularTotalCompra(5, 3)).toBe(15);
});

