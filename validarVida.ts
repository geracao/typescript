function personagemMorreu (dano: number, saude: number): number {
  if (saude - dano <= 0) {
    return 1
  } else {
    return 0
  }
}

console.log(personagemMorreu(100, 100))
