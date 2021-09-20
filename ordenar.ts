function ordenar (array: number[]): number[] {
  return array.sort((x, y) => x - y)
}

console.log(ordenar([9, 2, 5, 1, 10, 999, 33]))
