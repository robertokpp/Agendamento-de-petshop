import { phoneValidator } from "../utils/phone-validator.js";
import dayjs from "dayjs";
import { hourSelect } from "../utils/hour.js";
import { scheduleNew } from "../services/schedule-new.js";

const form = document.querySelector("form");
const tutorsName = document.getElementById("tutors-name");
const petName = document.getElementById("pet-name-forn");
const tel = document.getElementById("tel");
const formDate = document.getElementById("form-date");
const formHour = document.getElementById("form-hour");
const formService = document.getElementById("dec-service");

const todayDate = dayjs(new Date()).format("YYYY-MM-DD");

formDate.value = todayDate;
formDate.min = todayDate;

// ativar o validor de numero
phoneValidator(tel);
hourSelect(formHour);

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    const id = new Date().getTime();
    const name = tutorsName.value.trim();
    const pet = petName.value.trim();
    const telSchedule = tel.value;
    const descService = formService.value.trim();
    const dateSchedule = formDate.value;
    const hourSchudule = formHour.value;

    if (!name || !pet || !descService) {
      return alert("Existe campos em brancos");
    }

    await scheduleNew({
      id,
      name,
      pet,
      telSchedule,
      descService,
      dateSchedule,
      hourSchudule,
    });
  } catch (error) {
    console.log(error);
    alert("Nao foi possivel realizar o agendamento");
  }
};
