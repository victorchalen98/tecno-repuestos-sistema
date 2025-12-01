export function calcularStockDisponible(stockActual, cantidadVendida) {
  return stockActual - cantidadVendida;
}

export function calcularTotalCompra(precioUnitario, cantidad) {
  return precioUnitario * cantidad;
}

