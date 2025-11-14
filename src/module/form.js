import { phoneValidator } from "../utils/phone-validator.js";
import dayjs from "dayjs";
import { sheduleHour } from "../utils/hour.js";

const form = document.querySelector("form");
const submit = document.getElementById("btn-submit");
const tutorsName = document.getElementById("tutors-name");
const petName = document.getElementById("pet-name-forn");
const tel = document.getElementById("tel");
const formDate = document.getElementById("form-date");
const formHour = document.getElementById("form-hour");
const formService = document.getElementById("dec-service");

// validor de numero
phoneValidator(tel);

//Receber a data do dia e bloqueia as anterios
const today = dayjs().format("YYYY-MM-DD");
formDate.value = today;
formDate.min = today;


//Criar o input seletor de horas
sheduleHour.forEach((h) => {
  const option = document.createElement("option");
  option.value = h;
  option.textContent = h;
  formHour.appendChild(option);
});



form.onsubmit = (event) => {
  event.preventDefault();

  try {
    //Recuperando nome do tutor
    const name = tutorsName.value.trim();
    if (!name) {
      return alert("Insira o nome do tutor!");
    }

    const pet = petName.value.trim();
    if (!pet) {
      return alert("Insira o nome do pet!");
    }

    const descService = formService.value.trim();
    if (!descService) {
      return alert("Insira o servico que deseja !!");
    }

    console.log(
      name,
      pet,
      tel.value,
      descService,
      formDate.value,
      formHour.value
    );
  } catch (error) {
    console.log(error);
    alert("Nao foi possivel realizar o agendamento");
  }
};
