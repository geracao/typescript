function mediaAritimetica (args: number[]): number {
  const soma = args.reduce((current: number, next: number): number => current + next)

  return soma / args.length
}

console.log(mediaAritimetica([1, 3, 9, 2, 3, 4]))
