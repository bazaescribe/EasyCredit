//Calcula dias que tiene un mes
function daysInMonth(humanMonth, year) {
  return new Date(year || new Date().getFullYear(), humanMonth, 0).getDate();
}

//calcula días de pago
var diaPago = function(diasPago){
  var f = new Date();
  var fecha = {
    dia: f.getDate(),
    mes: f.getMonth() + 1,
    año: f.getFullYear()
  }
  fecha["dia"] += parseFloat(diasPago);
  diaslimite = daysInMonth(parseFloat(fecha["mes"]), 2015);
  //console.log(diaslimite);

  if(parseFloat(fecha["dia"]) > diaslimite){
    var diasMes = parseFloat(fecha["dia"]) - diaslimite;
    fecha["dia"]= diasMes;
    fecha["mes"] = parseFloat(fecha["mes"]) + 1;
  }

  return fecha;
};
