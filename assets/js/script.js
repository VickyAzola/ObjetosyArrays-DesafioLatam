//obtener las clases primera y ultima atencion
let primera = document.querySelectorAll(".primera")
let ultima = document.querySelectorAll(".ultima")

//data radiologia
let radiologia = [
  { hora: "11:00:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA" },
  { hora: "11:30:00", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE" },
  { hora: "15:00:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE" },
  { hora: "15:30:00", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA" },
  { hora: "16:00:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA" },
]

//ultimo item del array radiologia
let lastItemRadio = radiologia.length - 1

//agregar los textos al html
primera[0].textContent += ` ${radiologia[0].paciente.toLowerCase()} - ${radiologia[0].prevision.toLowerCase()}`
ultima[0].textContent += ` ${radiologia[lastItemRadio].paciente.toLowerCase()} - ${radiologia[lastItemRadio].prevision.toLowerCase()}`

//obtener la tabla
let radioTabla = document.getElementById("radioList")

//por cada objeto del array radiologia se escribirá el texto
for (item of radiologia) {
  radioTabla.innerHTML += `
    <tr>
      <td>${item.hora}</td>
      <td>${item.especialista.toLowerCase()}</td>
      <td>${item.paciente.toLowerCase()}</td>
      <td>${item.rut}</td>
      <td>${item.prevision.toLowerCase()}</td>
    </tr>
  `
}

let traumatologia = [
  { hora: "08:00:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
  { hora: "10:00:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE" },
  { hora: "10:30:00", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE" },
  { hora: "11:00:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE" },
  { hora: "11:30:00", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA" },
]

let lastItemTrauma = traumatologia.length - 1

primera[1].textContent += ` ${traumatologia[0].paciente.toLowerCase()} - ${traumatologia[0].prevision.toLowerCase()}`
ultima[1].textContent += ` ${traumatologia[lastItemTrauma].paciente.toLowerCase()} - ${traumatologia[lastItemTrauma].prevision.toLowerCase()}`

let traumaTabla = document.getElementById("traumaList")

for (item of traumatologia) {
  traumaTabla.innerHTML += `
    <tr>
      <td>${item.hora}</td>
      <td>${item.especialista.toLowerCase()}</td>
      <td>${item.paciente.toLowerCase()}</td>
      <td>${item.rut}</td>
      <td>${item.prevision.toLowerCase()}</td>
    </tr>
  `
}

let dental = [
  { hora: "08:30:00", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE" },
  { hora: "11:00:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE" },
  { hora: "11:30:00", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA" },
  { hora: "13:00:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA" },
  { hora: "13:30:00", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA" },
]

let lastItemDental = dental.length - 1

primera[2].textContent += ` ${dental[0].paciente.toLowerCase()} - ${dental[0].prevision.toLowerCase()}`
ultima[2].textContent += ` ${dental[lastItemDental].paciente.toLowerCase()} - ${dental[lastItemDental].prevision.toLowerCase()}`

let dentalTabla = document.getElementById("dentalList")

for (item of dental) {
  dentalTabla.innerHTML += `
    <tr>
      <td>${item.hora}</td>
      <td>${item.especialista.toLowerCase()}</td>
      <td>${item.paciente.toLowerCase()}</td>
      <td>${item.rut}</td>
      <td>${item.prevision.toLowerCase()}</td>
    </tr>
  `
}