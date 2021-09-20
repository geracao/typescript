function tabuadaAteDez (n: number): void {
  for (let i: number = 1; i <= 10; i ++) {
    let resultado = n * i
    console.log(`${n} x ${i} = ${resultado}`)
  }
}

tabuadaAteDez(999)
