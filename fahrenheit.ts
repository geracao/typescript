function fahrenheitParaCelsius (value: number): number {
  const celsius = ((value - 32) * 5) / 9
  return celsius
}

console.log(fahrenheitParaCelsius(32) + ' °C')
