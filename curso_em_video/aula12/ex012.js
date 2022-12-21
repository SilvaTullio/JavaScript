var agora = new Date()
var horario = agora.getHours;
console.log(`São exatamente ${horario} horas.`);
if (horario >= 6 && horario <= 11.0) {
  console.log(`Tenha um bom dia!`);
} else {
  if (horario >= 12.01 && horario <= 17) {
    console.log("Boa tarde!");
  } else {
    if (horario >= 18 && horario <= 24)
      console.log("Boa noite!");
    else {
      console.log("Boa madrugada");
    }
  }
}
