import { phoneValidator } from "../utils/phone-validator.js";
import dayjs from "dayjs";
import { hourSelect } from "../utils/hour.js";

const form = document.querySelector("form");
const submit = document.getElementById("btn-submit");
const tutorsName = document.getElementById("tutors-name");
const petName = document.getElementById("pet-name-forn");
const tel = document.getElementById("tel");
const formDate = document.getElementById("form-date");
const formHour = document.getElementById("form-hour");
const formService = document.getElementById("dec-service");

// ativar o validor de numero
phoneValidator(tel);
formDate.value = dayjs().format("YYYY-MM-DD");
  
hourSelect(formHour)


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
