var idade = 76;
console.log(`Você tem ${idade} anos. Seu status é:  `)
if (idade < 16) {
  console.log("Não vota");
} else {
  if (idade < 18 || idade >= 60) {
    console.log("Voto Opcional");
  } else {
      console.log("Voto Obrigatorio!");
  }
}
