function limitaPosicao (posicao: number): number {
  if (posicao <= 0) return posicao = 0
  else if (posicao >= 100) return 100
  else return posicao
}

console.log(limitaPosicao(200))
